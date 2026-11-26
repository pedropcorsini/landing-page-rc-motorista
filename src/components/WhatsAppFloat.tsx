import { useEffect, useState } from 'react';
import { WhatsAppIcon } from './BrandIcons';
import { useLanguage } from '../i18n/LanguageProvider';

// O aviso de atendente online aparece pouco depois da página abrir e some sozinho;
// o selo no botão fica até o visitante interagir com ele.
const NOTICE_DELAY = 1800;
const NOTICE_DURATION = 7000;

export function WhatsAppFloat() {
  const { t, whatsappHref } = useLanguage();
  const [noticeVisible, setNoticeVisible] = useState(false);
  const [badgeVisible, setBadgeVisible] = useState(true);

  useEffect(() => {
    const show = window.setTimeout(() => setNoticeVisible(true), NOTICE_DELAY);
    const hide = window.setTimeout(() => setNoticeVisible(false), NOTICE_DELAY + NOTICE_DURATION);
    return () => {
      window.clearTimeout(show);
      window.clearTimeout(hide);
    };
  }, []);

  const dismiss = () => {
    setNoticeVisible(false);
    setBadgeVisible(false);
  };

  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noreferrer"
      aria-label={`${t.ui.floatAria}. ${t.ui.floatOnline}`}
      onMouseEnter={dismiss}
      onFocus={dismiss}
      onClick={dismiss}
      className="group fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-whatsapp text-paper shadow-lift transition-transform duration-300 ease-expo hover:scale-110 sm:bottom-7 sm:right-7"
    >
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute bottom-full right-0 mb-3 flex items-center gap-2 whitespace-nowrap rounded-full border border-rule bg-paper-2 px-4 py-2 text-[0.875rem] font-semibold text-ink shadow-lift transition-[opacity,transform] duration-300 ease-out motion-reduce:transition-none ${
          noticeVisible ? 'translate-y-0 opacity-100' : 'translate-y-1 opacity-0'
        }`}
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inset-0 animate-ping rounded-full bg-whatsapp opacity-75 motion-reduce:animate-none" />
          <span className="relative h-2 w-2 rounded-full bg-whatsapp" />
        </span>
        {t.ui.floatOnline}
      </span>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-full border border-rule bg-paper-2 px-4 py-2 text-[0.875rem] font-semibold text-ink opacity-0 shadow-lift transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100 sm:block"
      >
        {t.ui.floatLabel}
      </span>
      <span aria-hidden="true" className="absolute inset-0 animate-whatsapp-pulse rounded-full bg-whatsapp" />
      <WhatsAppIcon className="relative h-7 w-7" />
      {badgeVisible && (
        <span
          aria-hidden="true"
          className="absolute -right-0.5 -top-0.5 grid h-5 w-5 place-items-center rounded-full border-2 border-paper bg-[var(--color-error)] text-[0.6875rem] font-bold leading-none text-white"
        >
          1
        </span>
      )}
    </a>
  );
}
