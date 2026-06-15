# Plano Do Projeto: Landing Page RC Motorista

## Objetivo

Desenvolver uma landing page profissional para `RC Motorista`, de Rafael Corsini, com foco em conversao de clientes/passageiros por WhatsApp, Instagram e telefone.

O projeto tambem deve servir como item de portfolio, com stack moderna, historico de commits formal, repositorio no GitHub e preparacao para deploy na Vercel.

## Escopo

- Criar uma landing page dark, moderna, clean e focada em conversao.
- Posicionar Rafael Corsini como motorista particular/profissional confiavel.
- Usar CTAs claros para WhatsApp, Instagram e telefone.
- Centralizar dados editaveis para facilitar futuras alteracoes.
- Estruturar o projeto como peca de portfolio profissional.
- Usar fluxo formal de Git com `main` e `develop`.
- Criar repositorio no GitHub chamado `landing-page-rc-motorista`.
- Preparar o projeto para deploy na Vercel.

## Stack

- Vite
- React
- TypeScript
- Tailwind CSS
- lucide-react
- Git
- GitHub
- Vercel

## Repositorio

- Nome do repositorio: `landing-page-rc-motorista`
- Branch principal: `main`
- Branch de desenvolvimento: `develop`
- Desenvolvimento feito em `develop`.
- `main` usada como versao estavel/deploy.
- Criacao do repositorio no GitHub via `gh` CLI, se estiver instalado e autenticado.
- Caso o `gh` nao esteja autenticado, interromper nesse ponto e informar o comando necessario ou pedir autorizacao para seguir pelo fluxo manual.

## Fluxo Git

- Inicializar Git local.
- Criar projeto base.
- Fazer commit inicial em portugues.
- Criar branch `develop`.
- Implementar a landing em etapas com commits separados.
- Subir `main` e `develop` para o GitHub.
- Ao finalizar a implementacao, fazer merge controlado de `develop` para `main`.
- Subir `main` atualizada para GitHub.
- Deixar o projeto pronto para importar na Vercel.

## Padrao Dos Commits

Commits formais, em portugues, seguindo Conventional Commits.

Exemplos previstos:

- `chore: inicializa projeto vite react`
- `chore: configura tailwind css`
- `chore: configura estrutura base do projeto`
- `feat: adiciona dados editaveis da landing`
- `feat: cria hero com chamadas de conversao`
- `feat: adiciona secoes de servicos e diferenciais`
- `feat: adiciona fluxo de agendamento e depoimentos`
- `feat: adiciona secao final de contato`
- `style: refina layout dark responsivo`
- `docs: adiciona readme profissional`
- `fix: ajusta acessibilidade e estados de foco`
- `chore: prepara projeto para deploy na vercel`

## Estrutura De Arquivos Prevista

```txt
landing-page-rc-motorista/
  README.md
  package.json
  index.html
  vite.config.ts
  tsconfig.json
  tailwind.config.js
  postcss.config.js
  src/
    main.tsx
    App.tsx
    index.css
    data/
      site.ts
    components/
      Header.tsx
      Hero.tsx
      Services.tsx
      Differentials.tsx
      HowItWorks.tsx
      Testimonials.tsx
      Contact.tsx
      Footer.tsx
```

## Dados Editaveis

Arquivo previsto: `src/data/site.ts`.

Conteudos centralizados:

- Marca: `RC Motorista`
- Motorista: `Rafael Corsini`
- Slogan
- WhatsApp
- Telefone
- Instagram
- Cidade/regiao
- Servicos
- Diferenciais
- Depoimentos
- Links de contato
- Textos principais da landing

## Secoes Da Landing

### Header

- Logo textual `RC Motorista`.
- Navegacao curta.
- CTA para WhatsApp.

### Hero

- Headline profissional.
- Subheadline clara.
- CTA principal para WhatsApp.
- CTA secundario para Instagram.
- Badges discretos de confianca.

### Servicos

- Transfers para aeroportos.
- Compromissos executivos.
- Eventos e ocasioes especiais.
- Viagens particulares.
- Atendimento recorrente.

### Diferenciais

- Pontualidade.
- Discricao.
- Atendimento direto.
- Conforto.
- Comunicacao rapida.

### Como Funciona

- Chamar no WhatsApp.
- Informar trajeto, data e horario.
- Confirmar agendamento.

### Depoimentos

- Conteudo provisorio e editavel.
- Sem fotos falsas.
- Sem numeros inventados.

### Contato Final

- WhatsApp.
- Instagram.
- Telefone.
- Regiao de atendimento.
- CTA final forte.

### Footer

- Marca.
- Nome do motorista.
- Atendimento sob agendamento.
- Links rapidos.

## Direcao Visual

- Visual dark premium.
- Fundo preto azulado.
- Cards escuros com bordas sutis.
- Tipografia moderna e legivel.
- CTAs objetivos.
- Accent azul profissional.
- CTA principal com verde WhatsApp.
- Icones consistentes via `lucide-react`.
- Sem emojis como icones.
- Sem mockups falsos.
- Sem metricas inventadas.
- Sem visual exagerado ou generico de IA.

## Conteudo Inicial

Headline:

```txt
Motorista particular com atendimento profissional, pontual e discreto.
```

Subheadline:

```txt
Transporte particular e executivo com Rafael Corsini para aeroportos, compromissos, eventos e viagens agendadas.
```

CTA principal:

```txt
Agendar pelo WhatsApp
```

CTA secundario:

```txt
Ver Instagram
```

Servicos:

- Transfers para aeroportos
- Compromissos executivos
- Eventos e ocasioes especiais
- Viagens particulares
- Atendimento recorrente

Diferenciais:

- Pontualidade
- Discricao
- Atendimento direto
- Conforto
- Comunicacao rapida

## UX E Conversao

- CTA principal acima da dobra.
- CTA repetido no final da pagina.
- WhatsApp como principal canal de conversao.
- Instagram como prova de presenca/social.
- Informacoes de contato visiveis.
- Layout mobile-first.
- Botoes com area de toque adequada.
- Estados de hover e foco claros.
- Contraste adequado no modo dark.
- Sem navegacao complexa.

## Acessibilidade

- HTML semantico.
- Links com nomes acessiveis.
- Icones decorativos tratados corretamente.
- Foco visivel em botoes e links.
- Contraste adequado.
- Sem dependencia exclusiva de cor para transmitir informacao.
- Responsivo em mobile, tablet e desktop.

## README Para Portfolio

O `README.md` deve conter:

- Nome do projeto.
- Descricao.
- Preview/link da Vercel, quando disponivel.
- Stack utilizada.
- Funcionalidades.
- Como rodar localmente.
- Estrutura do projeto.
- Fluxo de branches.
- Observacao sobre foco em conversao.
- Status do projeto.

## Deploy Na Vercel

O projeto deve ser deixado pronto para deploy com:

- `npm run build` funcionando.
- Output padrao do Vite: `dist`.
- Repositorio GitHub atualizado.
- Branch de producao recomendada: `main`.
- Branch `develop` disponivel para previews.

Se a Vercel CLI estiver instalada e autenticada, o deploy podera ser executado apos autorizacao. Caso contrario, o GitHub deve ficar pronto para importacao na Vercel.

## Verificacoes Antes De Finalizar

- Rodar instalacao de dependencias.
- Rodar build.
- Verificar se nao ha erros TypeScript/build.
- Verificar status do Git.
- Garantir que commits foram feitos em portugues.
- Garantir que `main` e `develop` foram enviadas ao GitHub.
- Confirmar URL do repositorio criado.
- Informar proximos passos para Vercel, ou fazer o deploy se autorizado e autenticado.

## Ordem De Execucao

1. Criar projeto `Vite + React + TypeScript`.
2. Instalar e configurar Tailwind CSS.
3. Instalar `lucide-react`.
4. Inicializar Git.
5. Criar commit inicial em portugues.
6. Criar branch `develop`.
7. Criar estrutura de dados e componentes.
8. Implementar layout e secoes.
9. Refinar responsividade, acessibilidade e acabamento visual.
10. Criar README profissional.
11. Rodar build.
12. Fazer commits formais em portugues.
13. Criar repositorio GitHub `landing-page-rc-motorista`.
14. Conectar remoto.
15. Subir `main` e `develop`.
16. Fazer merge controlado de `develop` para `main` ao final.
17. Preparar ou executar deploy na Vercel conforme autenticacao disponivel.
