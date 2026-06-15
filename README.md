# Landing Page RC Motorista

Landing page profissional para a marca **RC Motorista**, de Rafael Corsini, com foco em conversao de clientes/passageiros por WhatsApp, Instagram e telefone.

O projeto foi desenvolvido como uma peca de portfolio, com stack moderna, fluxo Git formal, testes automatizados e preparacao para deploy na Vercel.

## Status

- Projeto em desenvolvimento na branch `develop`.
- Branch `main` reservada para versao estavel/deploy.
- Deploy Vercel: https://landing-page-rc-motorista.vercel.app

## Stack

- Vite
- React
- TypeScript
- Tailwind CSS
- lucide-react
- Vitest
- Testing Library
- Vercel

## Funcionalidades

- Hero com proposta de valor clara.
- CTAs para WhatsApp e Instagram.
- Secao de servicos oferecidos.
- Secao de diferenciais do atendimento.
- Fluxo simples de agendamento em 3 passos.
- Depoimentos editaveis para futura substituicao por relatos reais.
- Contato final com WhatsApp, Instagram, telefone e regiao de atendimento.
- Dados principais centralizados em `src/data/site.ts`.
- Layout responsivo com visual dark premium.

## Como Rodar Localmente

```bash
npm install
npm run dev
```

## Scripts

```bash
npm run dev
npm test
npm run build
npm run preview
```

## Estrutura

```txt
src/
  App.tsx
  App.test.tsx
  index.css
  main.tsx
  components/
    Header.tsx
    Hero.tsx
    Services.tsx
    Differentials.tsx
    HowItWorks.tsx
    Testimonials.tsx
    Contact.tsx
    Footer.tsx
  data/
    site.ts
  test/
    setup.ts
```

## Fluxo De Branches

- `main`: branch estavel, recomendada para deploy na Vercel.
- `develop`: branch de desenvolvimento ativo.

## Testes

O projeto segue um fluxo TDD para a estrutura principal da landing:

- Testes escritos antes da implementacao da pagina final.
- Validacao de headline, CTAs, navegacao, servicos, diferenciais, fluxo de agendamento, prova social e links de contato.
- Execucao com Vitest e Testing Library.

```bash
npm test
```

## Deploy Na Vercel

Configuracao esperada:

- Framework: Vite
- Build command: `npm run build`
- Output directory: `dist`
- Branch de producao: `main`

O arquivo `vercel.json` ja define o comando de build e diretorio de saida.

## Observacoes

- Informacoes de telefone, WhatsApp, Instagram e regiao sao provisórias e devem ser atualizadas em `src/data/site.ts`.
- Depoimentos foram marcados como editaveis para evitar prova social falsa.
- O plano original do projeto esta em `PLAN.md`.
