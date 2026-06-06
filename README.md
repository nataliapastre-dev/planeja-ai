# 🚀 Planeja AI

O **Planeja AI** é uma aplicação web moderna que funciona como um planejador financeiro inteligente. O objetivo principal do projeto é ajudar os usuários a organizarem suas finanças de forma simples, intuitiva e eficiente, unindo um design fluido com alta performance.

🔗 **[Acesse o Planeja AI online](https://nataliapastre-dev.github.io/planeja-ai/)**

---

## ✨ Funcionalidades

*   **Interface Moderna & Responsiva:** Adaptável a qualquer tamanho de tela (desktop, tablets e smartphones).
*   **Navegação Fluida:** Transições de páginas dinâmicas utilizando *React Router*.
*   **Áreas Distintas:** Página inicial (Home) institucional e uma área dedicada para a aplicação (`AppPage`).
*   **Alta Performance:** Construído sobre o Vite para um carregamento instantâneo.
*   **Deploy Automatizado:** Integração contínua com GitHub Pages.
*   **Pronto para Expansão:** Estrutura de código limpa e modular, preparada para receber novas ferramentas financeiras.

---

## 🛠️ Tecnologias Utilizadas

O projeto foi construído utilizando as melhores práticas do ecossistema front-end atual:

| Tecnologia | Descrição |
| :--- | :--- |
| **⚛️ React** | Biblioteca principal para construção da interface baseada em componentes. |
| **⚡ Vite** | Ferramenta de build ultra-rápida para um desenvolvimento ágil. |
| **🌐 React Router DOM** | Gerenciamento de rotas e navegação interna da aplicação. |
| **🎨 Tailwind CSS** | Framework CSS utilitário para estilização rápida, moderna e responsiva. |
| **📦 gh-pages** | Pacote para automação do deploy no GitHub Pages. |

---

## 📁 Estrutura do Projeto

A organização dos arquivos segue uma estrutura modular para facilitar a manutenção:

```text
src/
├── assets/          # Arquivos estáticos (imagens, ícones, etc.)
├── pages/           # Páginas principais da aplicação
│   ├── Home.jsx     # Página inicial / Landing page
│   └── AppPage.jsx  # Dashboard / Área principal do planejador
├── App.jsx          # Componente raiz com a configuração de rotas
├── index.css        # Configurações globais de estilos e Tailwind
└── main.jsx         # Ponto de entrada do React
