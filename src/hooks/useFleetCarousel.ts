import { useCallback, useEffect, useRef, useState, type KeyboardEvent, type TouchEvent } from 'react';

const COMPACT_QUERY = '(max-width: 991px)';
const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)';
const SWIPE_THRESHOLD = 40;
const PROGRAMMATIC_SCROLL_MS = 700;

function getMatch(query: string) {
  return typeof window !== 'undefined' && typeof window.matchMedia === 'function' && window.matchMedia(query).matches;
}

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(() => getMatch(query));

  useEffect(() => {
    if (typeof window.matchMedia !== 'function') return;
    const mediaQuery = window.matchMedia(query);
    const onChange = () => setMatches(mediaQuery.matches);
    onChange();
    mediaQuery.addEventListener('change', onChange);
    return () => mediaQuery.removeEventListener('change', onChange);
  }, [query]);

  return matches;
}

/**
 * Carrossel com efeito de foco (card ativo em destaque).
 * Desktop: todos os cards visiveis, setas/dots/swipe trocam o ativo.
 * Ate 991px: trilho com scroll-snap; o ativo acompanha o scroll nativo
 * e selecionar um card centraliza o trilho sem mexer a pagina na vertical.
 */
export function useFleetCarousel(count: number, initialIndex = 0) {
  const isCompact = useMediaQuery(COMPACT_QUERY);
  const prefersReducedMotion = useMediaQuery(REDUCED_MOTION_QUERY);
  const [activeIndex, setActiveIndex] = useState(() => (getMatch(COMPACT_QUERY) ? 0 : initialIndex));

  const trackRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);
  const ignoreScrollUntil = useRef(0);
  const touchStartX = useRef<number | null>(null);
  const frame = useRef<number | null>(null);
  const isFirstCompactRun = useRef(true);

  const centerCard = useCallback((index: number, behavior: ScrollBehavior) => {
    const track = trackRef.current;
    const card = cardRefs.current[index];
    if (!track || !card || typeof track.scrollTo !== 'function') return;

    const left = card.offsetLeft - (track.clientWidth - card.offsetWidth) / 2;
    ignoreScrollUntil.current = Date.now() + PROGRAMMATIC_SCROLL_MS;
    track.scrollTo({ left, behavior });
  }, []);

  const select = useCallback(
    (index: number) => {
      const nextIndex = ((index % count) + count) % count;
      setActiveIndex(nextIndex);
      if (isCompact) centerCard(nextIndex, prefersReducedMotion ? 'auto' : 'smooth');
    },
    [count, isCompact, centerCard, prefersReducedMotion],
  );

  const next = useCallback(() => select(activeIndex + 1), [select, activeIndex]);
  const prev = useCallback(() => select(activeIndex - 1), [select, activeIndex]);

  // Ao entrar no modo compacto (resize/rotacao), centraliza o card ativo sem animacao.
  useEffect(() => {
    if (isFirstCompactRun.current) {
      isFirstCompactRun.current = false;
      return;
    }
    if (isCompact) centerCard(activeIndex, 'auto');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isCompact]);

  const syncWithScroll = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    const center = track.scrollLeft + track.clientWidth / 2;
    let closest = 0;
    let smallestDistance = Number.POSITIVE_INFINITY;

    cardRefs.current.forEach((card, index) => {
      if (!card) return;
      const distance = Math.abs(card.offsetLeft + card.offsetWidth / 2 - center);
      if (distance < smallestDistance) {
        smallestDistance = distance;
        closest = index;
      }
    });

    setActiveIndex(closest);
  }, []);

  const onScroll = useCallback(() => {
    if (!isCompact || Date.now() < ignoreScrollUntil.current || frame.current !== null) return;
    frame.current = requestAnimationFrame(() => {
      frame.current = null;
      syncWithScroll();
    });
  }, [isCompact, syncWithScroll]);

  // scrollend garante a sincronia final mesmo se o usuario arrastar durante um scroll programatico.
  useEffect(() => {
    const track = trackRef.current;
    if (!track || !isCompact) return;

    const onScrollEnd = () => {
      ignoreScrollUntil.current = 0;
      syncWithScroll();
    };
    track.addEventListener('scrollend', onScrollEnd);
    return () => track.removeEventListener('scrollend', onScrollEnd);
  }, [isCompact, syncWithScroll]);

  useEffect(
    () => () => {
      if (frame.current !== null) cancelAnimationFrame(frame.current);
    },
    [],
  );

  // No desktop o trilho nao rola: o swipe troca o card ativo (tablets em paisagem).
  const onTouchStart = useCallback((event: TouchEvent) => {
    touchStartX.current = event.changedTouches[0]?.screenX ?? null;
  }, []);

  const onTouchEnd = useCallback(
    (event: TouchEvent) => {
      const start = touchStartX.current;
      touchStartX.current = null;
      if (isCompact || start === null) return;

      const delta = (event.changedTouches[0]?.screenX ?? start) - start;
      if (delta < -SWIPE_THRESHOLD) next();
      else if (delta > SWIPE_THRESHOLD) prev();
    },
    [isCompact, next, prev],
  );

  const onKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') {
        event.preventDefault();
        next();
      } else if (event.key === 'ArrowLeft') {
        event.preventDefault();
        prev();
      }
    },
    [next, prev],
  );

  const setCardRef = useCallback(
    (index: number) => (element: HTMLElement | null) => {
      cardRefs.current[index] = element;
    },
    [],
  );

  return {
    activeIndex,
    isCompact,
    select,
    next,
    prev,
    trackRef,
    setCardRef,
    onScroll,
    onTouchStart,
    onTouchEnd,
    onKeyDown,
  };
}
