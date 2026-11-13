# Redesign completo RC Motorista (referência: primustransferexecutive.com.br)

## Contexto

O site atual (Vite + React + TS + Tailwind 3 + lucide-react) tem visual editorial com serif DM Serif e laranja chapado. O objetivo é refazer o design por completo seguindo a estrutura, os cards, as animações e o ritmo de seções da Primus, mantendo o conteúdo real da RC Motorista (sem inventar números, prêmios, "24h" ou depoimentos). A seção "Opções de Mobilidade" deve ser uma réplica fiel do carrossel da Primus (efeito de foco).

Decisões já tomadas com o usuário:
- **Paleta:** laranja RC (#FF6A00) aplicado na estrutura Primus (no lugar do dourado).
- **Frota:** 4 categorias: Sedã, SUV, Minivan e Van.
- **Imagens da frota:** ilustrações line-art originais geradas por IA (nada copiado da Primus, carros genéricos sem logo de marca).
- **Avaliações Google:** omitir por enquanto (o slot vira a seção Diferenciais).

## Passo 0 da execução

Copiar este plano para `REDESIGN.md` na raiz do repo (commitado) e usá-lo como checklist, marcando `[x]` a cada task concluída. Trabalhar na branch `feat/redesign` criada a partir de `develop` (sincronizar `develop` com `main` antes). Commits em conventional commits, um por task, sem `Co-Authored-By`, sem push sem confirmação.

---

## Especificações extraídas da referência (valores reais do CSS deles)

**Fontes:** Playfair Display 600/700 (h1 do hero, h2 do "Sobre", trecho itálico dos passos), Montserrat 800/900 (títulos de seção, títulos de card, botões), Plus Jakarta Sans 400 a 700 (corpo). Carregar via `<link>` com preconnect no `index.html` (remover o `@import` do CSS).

**Easing padrão:** `cubic-bezier(0.16, 1, 0.3, 1)` em tudo. Criar `ease-expo` no Tailwind.

**Tokens (adaptados para laranja):**
| Token | Valor |
|---|---|
| bg-body / surface / alt | `#07080a` / `#0c0d12` / `#0a0c13` |
| card / card-hover | `#11131c` / `#161925` |
| fleet-bg | `#08090d` |
| border / border-subtle | `rgba(255,255,255,.08)` / `.04` |
| text title / body / muted | `#fff` / `#9da8b6` / `#64748b` |
| brand / brand-light / brand-dark | `#FF6A00` / `#FF8A3D` / `#B84A00` |
| brand-glow / brand-soft / brand-border | `rgba(255,106,0,.28)` / `.10` / `.35` |
| hero-title (champagne quente) | `#F4E7DC` |
| seção clara (Sobre) | bg `#fff`, título `#0f172a`, texto `#334155` |

**Componentes de referência:**
- **Navbar:** sticky, `bg rgba(10,11,15,.92)` + `backdrop-blur(16px)`, borda inferior white/18, padding .95rem. Estado `scrolled` (scrollY > 10): bg `rgba(8,9,13,.96)`, padding .7rem, sombra `0 10px 30px black/70`. Link ativo destacado por scroll spy. Logo com `hover: scale(1.03)`. Mobile: hambúrguer abre gaveta lateral.
- **Hero:** fundo full-bleed + overlay `linear-gradient(0deg, ink/85 0%, ink/30 12%, transparent 28%), linear-gradient(90deg, ink/96 0%, ink/90 38%, ink/72 58%, ink/35 82%, ink/15 100%)`. Chips: `bg rgba(14,16,24,.82)`, blur 10px, borda white/8, radius 12px, padding .75rem 1.1rem, hover `translateY(-2px)` + borda brand/40 + glow. Botão "bronze" vira laranja escuro: `linear-gradient(#3a1d07, #220f02)`, borda 1.5px `#d9600a`, glow brand/28 22px, texto `#fbe9dc`, uppercase Montserrat 800 .86rem tracking .05em, radius 8px, hover `translateY(-2px)` + glow mais forte. Indicador de status: ponto verde 7px com `statusPulse 2.5s`.
- **Service card:** bg card, borda white/8, radius 16px, padding 2.2rem, sombra `0 10px 30px black/40`; hover: borda brand, `translateY(-4px)`, sombra + glow brand/15. Ícone 52px radius 12px, bg brand/12, borda brand/32.
- **Step card:** gradiente `#131622 → #0a0c12`, borda brand/16, radius 16px, linha de 2px no topo em gradiente (transparente → brand/40 → transparente); hover `translateY(-8px)`, linha fica 100% brand, caixa do ícone e badge "01" preenchem com brand.
- **FAQ:** item bg `#12141f`, borda white/8, radius 12px; ativo: borda brand + glow; ícone "+" gira 45° e ganha fundo brand; só um aberto por vez; painel anima altura .4s expo.
- **CTA final:** banner radius 16px, `linear-gradient(135deg, #141724, #07080a)`, borda brand, padding 4.5rem 3.5rem, glow radial brand/25 de 400px no canto superior direito.
- **WhatsApp flutuante:** canto inferior direito, anel `whatsappPulse 2.2s`.
- **Keyframes:** `statusPulse`, `whatsappPulse`, `heroZoom` (Ken Burns lento na imagem do hero, já que não temos vídeo).

---

## Estrutura final da página

| # | Seção | Conteúdo RC (só fatos já existentes no site) |
|---|---|---|
| 1 | Header | Logo, nav (Início, Sobre, Serviços, Frota, Diferenciais, Como solicitar, Dúvidas), botão "Fale conosco" (WhatsApp) |
| 2 | Hero `#top` | H1 Playfair "Motorista Executivo / em São Paulo e região"; 6 chips (Transfers aeroportos, Compromissos executivos, Eventos e ocasiões, Viagens particulares, Atendimento sob agendamento, Contato direto com Rafael); subtítulo; CTA "Agendar pelo WhatsApp"; status "Atendimento sob agendamento" |
| 3 | Sobre `#sobre` (clara) | Eyebrow "Nossa missão & propósito", texto do Rafael a partir de headline/subheadline/diferenciais, link "Conheça os serviços →", foto `atendimento-executivo.jpg` |
| 4 | Serviços `#servicos` | 6 service cards: os 4 atuais + "Atendimento recorrente" + "Serviço de bordo personalizado" (ambos já citados no site) |
| 5 | Opções de Mobilidade `#frota` | Réplica do carrossel (spec abaixo) |
| 6 | Diferenciais `#diferenciais` | 6 diferenciais atuais em cards estilo review-card (ocupa o lugar das avaliações) |
| 7 | Como solicitar `#como-solicitar` | Título "Siga os passos para fazer a sua *Solicitação*"; 3 step cards atuais; CTA |
| 8 | Dúvidas `#duvidas` | FAQ com 7 perguntas (agendamento, região, aeroportos, antecedência, eventos, grupos/veículos, contato direto). Respostas só com fatos do site, marcadas para o Rafael validar |
| 9 | CTA final `#contato` | Banner + WhatsApp, Instagram e telefone |
| 10 | Footer | 4 colunas (marca + redes, Navegação, Serviços, Contato) + "© 2026 RC Motorista. Todos os direitos reservados. Desenvolvido por Pedro Passos Corsini" |

`VisualGallery` sai. Fotos não usadas (`aeroportos`, `compromissos`, `eventos`, `interior-veiculo`) ficam no repo.

---

## Spec da seção "Opções de Mobilidade" (réplica fiel)

**Seção:** `id="frota"`, bg `#08090d`, `border-y white/5`, padding `4.5rem 0 5rem` (≤768: `2rem 0 3.5rem`; ≤580: `1.5rem 0 2.8rem`), `overflow-hidden`.

**Cabeçalho centralizado:** eyebrow com ponto 6px brand com glow + "FROTA SOB MEDIDA & AGENDAMENTO"; H2 Montserrat 900, 44px, tracking -0.01em, branco, "Opções de Mobilidade"; descrição `#9da8b6`.

**Wrapper:** relative, `margin 3rem 0 1.5rem`, `padding 1rem 0`, flex centralizado.

**Setas:** absolute, `top 35%`, `translateY(-50%)`, 48px círculo, bg white/8, borda white/18, sombra `0 6px 20px black/60`, transição .25s expo. Hover: bg brand, ícone escuro, `scale(1.1)`, glow brand/45 25px. Active: `scale(.96)`. Prev `left:0`, next `right:0`.

**Track (desktop ≥992px):** flex, `items-start`, `justify-center`, gap 3rem, max-w 1160px, px 1rem.

**Card:**
- Base: `flex 1 1 0`, min-w 260, max-w 360, `opacity .35`, `scale(.94)`, transição opacity/transform .35s expo, `select-none`, cursor pointer. Clique no card o torna ativo.
- Ativo: `opacity 1`, `scale(1.05)`. Hover não ativo: `opacity .85`, `scale(.98)`.
- Caixa da imagem: altura 220px, flex center, mb 1.6rem; img `object-contain`, `drop-shadow(0 2px 8px black/40)`, `mix-blend-mode: lighten` (fundo escuro da ilustração some). Ativo: img `translateY(-4px)`; hover não ativo: `-2px`.
- Linha do título: flex baseline justify-between, gap .75rem, mb .65rem, pb .5rem, `border-b white/10` → ativo `brand/40`.
- Título: Montserrat 900, 1.4rem, uppercase, tracking -0.015em, leading 1.1, cor `#64748b` → ativo branco; hover não ativo `#cbd5e1`.
- Specs: ícones `Users` e `Luggage` (lucide, cor brand, .8rem) + números, .84rem 600, `#64748b` → ativo `#e2e8f0`.
- Descrição: .9rem, leading 1.6, mb 1.25rem, min-h 48px, `#64748b` → ativo `#cbd5e1`.
- Link "Consultar disponibilidade →": Montserrat 800 .88rem, `#64748b` → ativo `brand-light`; hover do card: branco; hover do link: brand e seta `translateX(5px)`. Abre WhatsApp com mensagem pré-preenchida com a categoria ("Olá Rafael, gostaria de consultar a disponibilidade do Sedã Executivo...").

**Dots:** 8px, white/18; ativo: brand, largura 24px (pílula), glow brand/50 10px; hover white/40. Clicáveis.

**Comportamento (hook `useFleetCarousel`):**
- `activeIndex` inicial = 1 (SUV, como na referência). Prev/next com wrap-around.
- Swipe touch com threshold 40px.
- Teclado: ArrowLeft/ArrowRight com foco dentro do carrossel.
- **≤991px:** track vira `overflow-x-auto`, `snap-x snap-mandatory`, scrollbar oculta, gap 1.25rem, `justify-start`; card `flex 0 0 min(320px, 85vw)`, `opacity .65`, `scale(.96)`; ativo `opacity 1`, `scale(1)`. Ao selecionar, centralizar com `track.scrollTo({ left, behavior: 'smooth' })` (melhor que o `scrollIntoView` da Primus, que pode mexer a página na vertical). Sincronizar `activeIndex` com o scroll nativo (card mais próximo do centro) para os dots acompanharem o arraste.
- A11y: `aria-roledescription="carrossel"`, labels nas setas ("Veículo anterior/próximo"), `aria-current` no dot ativo, região `aria-live="polite"` anunciando "Veículo 2 de 4: SUV Executivo". `prefers-reduced-motion`: sem transforms, scroll instantâneo.

**Dados (`site.fleet`)**, capacidades a confirmar com o Rafael:
| Categoria | Passageiros | Malas | Descrição (original, não copiada) |
|---|---|---|---|
| Sedã Executivo | 3 | 3 | Conforto e discrição para agendas urbanas e aeroportos |
| SUV Executivo | 4 | 4 | Mais espaço e presença para compromissos importantes |
| Minivan Executiva | 6 | 6 | Ideal para famílias e pequenos grupos |
| Van Executiva | 10 a 15 | 12 | Grupos, comitivas e eventos com todos juntos |

**Ilustrações:** 4 PNGs 1200x896 em `images/frota/{sedan,suv,minivan,van}.png`. Gerar com o `generate_image` do Figma MCP (ou ferramenta do usuário) com o prompt base: *"Hand-drawn white pencil line-art sketch of a generic black executive {sedan|SUV|minivan|cargo-style passenger van}, three-quarter front view, visible construction lines, subtle white highlights, solid #08090d background, no brand logos, no badges, no text, centered, technical illustration style"*. Mesmo enquadramento e escala nas 4.

---

## Tasks

### Fase 1: Fundação
- [x] **T1. Design tokens e base:** `tailwind.config.js` (cores, fontes, `ease-expo`, sombras `card`, `card-hover`, `glow`), `index.html` (fontes com preconnect, `theme-color #07080a`), `src/index.css` (base, keyframes, `@layer components` para `.eyebrow`, `.btn-cta`, `.btn-outline`, scrollbar laranja).
- [x] **T2. Dados:** reestruturar `src/data/site.ts` (nav, heroFeatures, services x6, fleet, differentials, steps, faq, footer) e criar `buildWhatsappHref(message)` reaproveitando `whatsappNumber`.
- [x] **T3. Primitivos:** `SectionHeading` (eyebrow com ponto + título + descrição, variantes centro/esquerda/clara) e `WhatsAppFloat`. Reaproveitar `BrandIcons.tsx`.

### Fase 2: Seções
- [x] **T4. Header:** sticky glass, estado `scrolled`, scroll spy com IntersectionObserver, gaveta mobile com overlay, Esc fecha, foco gerenciado.
- [x] **T5. Hero:** fundo `hero-carro.jpg` com `heroZoom`, overlays, 6 chips (2 colunas desktop, 1 coluna mobile como no print iPhone), CTA laranja escuro, status pulsante.
- [x] **T6. Sobre (clara):** texto à esquerda, foto à direita com radius 16px e sombra; mobile empilha.
- [x] **T7. Serviços:** grid 3x2 (md 2 col, mobile 1 col) de service cards.
- [ ] **T8. Opções de Mobilidade:** gerar as 4 ilustrações, `FleetShowcase.tsx` + `src/hooks/useFleetCarousel.ts` conforme spec. **(Sugestão: executar com Fable 5.2)**
  - [x] `FleetShowcase.tsx`, `useFleetCarousel.ts` e `src/styles/fleet.css` conforme spec (setas, dots, clique, teclado, swipe, scroll-snap sincronizado, aria-live).
  - [x] Ilustrações finais por IA geradas no Figma, tratadas com `scripts/bake-fleet-images.py` (fundo #08090d gravado e bordas esmaecidas) e salvas em `images/frota/*.jpg` (cerca de 63 KB cada). Prompt e processo em `images/frota/README.md`.
  - [ ] Confirmar capacidades (passageiros e malas) com o Rafael.
- [x] **T9. Diferenciais:** 6 cards com ícone, hover igual ao review-card.
- [x] **T10. Como solicitar:** 3 step cards com badge 01 a 03 + CTA.
- [x] **T11. FAQ:** accordion acessível (`button` com `aria-expanded`/`aria-controls`, animação `grid-rows 0fr → 1fr`).
- [x] **T12. CTA final + Footer:** banner com glow; footer 4 colunas; remover `Contact.tsx` antigo e `VisualGallery.tsx`.
- [x] **T13. Montagem:** `App.tsx` na nova ordem.

### Fase 3: Qualidade
- [x] **T14. Testes:** atualizar `src/App.test.tsx` (novos headings e âncoras, links WhatsApp/Instagram/telefone, créditos, ausência de depoimentos); criar `FleetShowcase.test.tsx` (wrap prev/next, clique em dot e card, href do WhatsApp contém a categoria, aria-live) e `Faq.test.tsx` (um aberto por vez, `aria-expanded`).
- [x] **T15. QA visual:** comparação seção a seção com a referência via Chrome headless (script CDP) em 1440px e 390px, mais checagem de 360, 768, 1024 e 1280px (sem rolagem horizontal em nenhuma largura).
  - Container de 1180 para 1280px (mesma largura útil da referência: 1232px).
  - Títulos: altura de linha 1.2 e espaçamentos eyebrow/título/descrição iguais aos da referência; corrigido bug em que `sm:text-5xl` zerava a altura de linha do hero e do Sobre.
  - Sobre: colunas iguais com foto maior, texto com entrelinha 1.85, link com sublinhado; sem hifenização no mobile.
  - Serviços e Diferenciais: espaçamento entre cards maior no desktop.
  - FAQ: divisor acima da resposta. CTA final: botão preenchido em gradiente. Rodapé: títulos maiores e fundo mais escuro.
  - Header: menu completo só a partir de 1280px (em 1024px o "Como solicitar" quebrava em duas linhas); "Fale conosco" com texto a partir de 380px.
  - Frota entre 992 e 1279px: título e link menores para caber sem quebra.
- [x] **T16. Acabamento:** meta/OG atualizados, `prefers-reduced-motion`, foco visível, contraste, compressão das imagens pesadas (`interior-veiculo.png` tem 2 MB), README.
  - Meta: título, descrição, canonical, OG/Twitter com `public/preview-link-v3.jpg` (1200x630, captura do hero novo).
  - Fontes: removidos os pesos sem uso (Plus Jakarta 500, Playfair itálico 700).
  - Imagens: `hero-carro.jpg` 657 KB para 296 KB; `atendimento-executivo.jpg` 769 KB para 237 KB (1000px). `interior-veiculo.png` não é mais usada no site, então não entra no build.
  - Acessibilidade: link "Pular para o conteúdo"; contorno de foco do FAQ por dentro (o container corta); contorno do link da frota mais próximo (o trilho rola no mobile); rodapé de white/45 para white/55 (4,48 para 5,9:1).
  - Header em telas abaixo de 400px: "Fale conosco" vira só o ícone (texto mantido para leitores de tela); título do hero um pouco menor.
  - Exceção consciente de contraste: cards inativos do carrossel (opacidade .35, efeito de foco da referência). Componentes inativos são isentos na WCAG, e o conteúdo fica legível ao selecionar.
  - README reescrito para o redesign, com nova imagem em `docs/preview-redesign.jpg`.
- [ ] **T17 (opcional).** Reveal suave no scroll (fade-up 16px, .6s expo). A Primus não tem; só se o usuário quiser.

---

## Arquivos

- Modificar: `tailwind.config.js`, `index.html`, `src/index.css`, `src/data/site.ts`, `src/App.tsx`, `src/App.test.tsx`, `src/components/{Header,Hero,Services,Differentials,HowItWorks,Footer}.tsx`, `README.md`
- Criar: `REDESIGN.md`, `src/components/{SectionHeading,About,FleetShowcase,Faq,CtaBanner,WhatsAppFloat}.tsx`, `src/hooks/useFleetCarousel.ts`, `images/frota/*.png`, testes novos
- Remover: `src/components/VisualGallery.tsx`, `src/components/Contact.tsx`
- Sem novas dependências (carrossel e accordion feitos à mão).

## Onde usar o Fable

Recomendo o **Fable 5.2** (o mais recente; é mais barato que o 5.1 e o 5: US$ 8 / 40 por MTok, contra US$ 4 / 20 do Opus 5.5). Use em dois pontos:
1. **T8 (Opções de Mobilidade):** é a peça mais difícil: fidelidade visual, estados combinados (ativo, hover, mobile com scroll-snap sincronizado), swipe, teclado e a11y. É onde o ganho de raciocínio compensa o custo dobrado.
2. **T15 (QA visual final):** comparar screenshots da referência com o resultado e caçar diferenças finas de espaçamento e animação.

O resto (tokens, seções estáticas, FAQ, footer, testes) roda bem no Opus 5.5. Para trocar: `/model` antes da task, ou disparar a task como subagente com `model: "fable"`.

## Verificação

1. `npm run test` passando (testes atualizados e novos).
2. `npm run build` sem erros de TypeScript.
3. `npm run dev` + claude-in-chrome em 1440px e 390px: screenshots de cada seção lado a lado com a referência.
4. Carrossel: clique em card, setas (com wrap), dots, teclado, swipe e scroll nativo no mobile sincronizando os dots; link abre WhatsApp com a categoria.
5. Header: estado `scrolled`, scroll spy, gaveta mobile (abre, fecha com Esc e clique fora).
6. FAQ: só um aberto por vez, animação suave.
7. Com `prefers-reduced-motion` ativo, nada de transform ou zoom.
