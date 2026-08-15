# 📷 Larissa Photographer — Portfólio Digital

Um portfólio de fotografia minimalista, elegante e de alta performance, desenvolvido com foco em direção de arte editorial, experiência do usuário imersiva e conversão.

## ✨ Conceito & Direção de Arte

Este projeto foi construído sob a premissa de que **a fotografia é a única protagonista**. Evitando templates corporativos ou excessos visuais, a interface utiliza:
* **Espaços em branco generosos** (respiro editorial).
* **Tipografia mista de alto contraste** (Cormorant Garamond para títulos e Inter para interfaces).
* **Grade simétrica com proporção editorial (4:5)** e transições fluidas.
* **Modo imersivo (Lightbox)** para apreciação de detalhes em tela cheia com navegação por teclado e toque.

## 🛠️ Tecnologias & Stack

O projeto utiliza tecnologias modernas de desenvolvimento web focadas em velocidade e SEO:
* **[Next.js](https://nextjs.org/)** (App Router & Server/Client Components)
* **[React](https://react.dev/)**
* **[TypeScript](https://www.typescriptlang.org/)**
* **[Tailwind CSS v4](https://tailwindcss.com/)**
* **[Framer Motion](https://www.framer.com/motion/)** (Animações suaves e microinterações)
* **[Lucide React](https://lucide.dev/)** (Ícones vetoriais minimalistas)

## 📂 Estrutura do Projeto

```text
portfolio-fotografia/
├── public/
│   └── images/          # Repositório de fotografias otimizadas
├── src/
│   ├── app/             # Rotas, Layout global e Metadados (SEO)
│   ├── components/
│   │   ├── layout/      # Navbar e Footer estruturais
│   │   ├── sections/    # Hero, Portfólio e Sobre
│   │   └── ui/          # Componentes reutilizáveis (Lightbox)
│   └── lib/             # Dados estáticos (data.ts) e utilitários (cn)
├── tsconfig.json        # Configuração do TypeScript e Path Aliases
└── package.json         # Dependências do projeto