# 📘 Blog Pessoal - Frontend

Este é o frontend de um Blog Pessoal desenvolvido com **React**, **TypeScript**, **Vite** e **Tailwind CSS**. O projeto permite o cadastro de usuários, login, criação e exibição de postagens, entre outras funcionalidades. Ideal para praticar conceitos de **componentização**, **rotas protegidas**, **hooks** e **consumo de APIs**.

---

## 🚀 Tecnologias Utilizadas

- ⚛️ [React](https://reactjs.org/) — Biblioteca JavaScript para interfaces
- 📘 [TypeScript](https://www.typescriptlang.org/) — Superset do JavaScript com tipagem
- ⚡ [Vite](https://vitejs.dev/) — Build tool rápida com suporte a HMR
- 🎨 [Tailwind CSS](https://tailwindcss.com/) — Framework utilitário para estilização
- ✅ [ESLint](https://eslint.org/) — Linter para padronizar o código

---

## 📂 Estrutura de Pastas

```bash
src/
├── App.tsx
├── main.tsx
├── pages/
│   ├── Contador/
│   ├── Home/
│   ├── Login/
│   └── Tarefa/
├── assets/
│   └── [imagens e ícones]
├── styles/
│   └── index.css
```

---

## ✅ Funcionalidades

- 🔐 Autenticação com token
- 📝 Cadastro e listagem de tarefas
- 🏠 Página inicial com boas-vindas
- 💬 Página de login
- ⏱️ Componente de contador (exemplo funcional)

---

## ⚙️ Configuração de ESLint com TypeScript

Se deseja aplicar regras mais rigorosas de lint com suporte ao TypeScript, considere o seguinte:

```ts
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      ...tseslint.configs.recommendedTypeChecked,
      ...tseslint.configs.stylisticTypeChecked,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
])
```

Para regras específicas do React:

```ts
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      reactX.configs['recommended-typescript'],
      reactDom.configs.recommended,
    ],
  },
])
```

---

## 📦 Instalação

```bash
# Clone o repositório
git clone https://github.com/naahcarvalho/blog-pessoal-frontend

# Acesse a pasta do projeto
cd blog-pessoal-frontend

# Instale as dependências
yarn install

# Inicie o projeto
yarn dev
```

---

## 🌐 Backend

Esse projeto depende do backend:  
🔗 [Repositório do Blog Pessoal - Backend](https://github.com/naahcarvalho/blog-pessoal-backend)

---

## 💡 Próximos passos

- ✅ Melhorias no layout responsivo  
- ✍️ Adição de comentários em postagens  
- 📅 Ordenar tarefas por data

---

## 👩‍💻 Feito por

[Nathalia Carvalho](https://github.com/naahcarvalho) Front-end Developer em transição de carreira e estudante na Generation Brasil.
