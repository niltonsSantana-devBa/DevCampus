# Faculdade Horizont
# Desenvolvido por Robert Cefas e Nilton Sacramento

Site institucional demonstrativo da Faculdade Horizonte, desenvolvido para apresentar a instituição, seus cursos, formas de ingresso e canais de atendimento. O projeto é uma aplicação web responsiva em React, com navegação entre páginas feita pelo React Router.

## Como executar

### Requisitos

- Node.js e npm instalados.

### Instalação e execução local

Na pasta do projeto, execute:

```bash
npm ci
npm run dev
```

O Vite informará o endereço local para abrir no navegador, normalmente `http://localhost:5173`.

### Verificações

```bash
npm run lint
npm run build
```

O comando `build` gera a versão de produção na pasta `dist`.

## Como o site funciona

O cabeçalho apresenta a marca, informações do vestibular e links para as páginas. O rodapé reúne atalhos, cursos e canais de atendimento. A aplicação possui as seguintes seções:

- **Início (`/`)** — apresenta a proposta da Faculdade Horizonte, diferenciais, indicadores institucionais e chamadas para conhecer os cursos ou as formas de ingresso.
- **Sobre (`/sobre`)** — conta a história e os pilares da instituição e mostra informações sobre infraestrutura do campus.
- **Cursos (`/cursos`)** — lista as graduações disponíveis. É possível filtrar por área e pesquisar pelo nome ou descrição do curso.
- **Ingresso (`/ingresso`)** — apresenta modalidades de ingresso. O botão de pré-cadastro abre um formulário com nome, data de nascimento, CPF e curso de interesse.
- **Notícias e eventos (`/noticias`)** — mostra eventos do campus, permite filtrar por categoria e simular a confirmação de presença.
- **Contato (`/contato`)** — exibe os canais institucionais e um formulário demonstrativo para simular uma solicitação de atendimento.

Os cursos, eventos, destaques e alunos usados nas telas estão organizados em arquivos locais na pasta `src/data`. As imagens de marca e os ícones institucionais ficam em `src/assets`.

## Observação sobre os formulários

Este projeto é uma demonstração de interface. O pré-cadastro não envia nem armazena os dados preenchidos; a confirmação de presença em eventos e o formulário de atendimento também são simulações locais no navegador. Para uso real, seria necessário integrar esses fluxos a uma API e a um sistema de armazenamento seguro.

## Apresentação do site

> Olá, professor. Este é o site institucional da Faculdade Horizonte. O objetivo do projeto é apresentar a instituição e facilitar o acesso às principais informações para estudantes e candidatos.
>
> Na página inicial, mostramos os diferenciais acadêmicos e direcionamos o visitante para os cursos e para o processo seletivo. Na seção “Sobre”, apresentamos a identidade, os pilares e a infraestrutura da faculdade. Em “Cursos”, o visitante pode explorar as graduações e localizar opções por área ou busca.
>
> Na página de ingresso, organizamos as modalidades disponíveis e criamos um pré-cadastro com os dados básicos do futuro aluno: nome completo, data de nascimento, CPF e curso escolhido. A área de notícias apresenta eventos e permite simular a inscrição. Por fim, a página de contato reúne endereço, telefone, WhatsApp, horário de atendimento e um formulário demonstrativo.
>
> O site foi construído com React e Vite, com componentes e estilos organizados por página, navegação entre rotas e layout responsivo. Os dados apresentados são locais e os formulários ainda não estão conectados a um sistema externo; por isso, as interações são demonstrações de como a experiência funcionaria.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
