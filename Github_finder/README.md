<<<<<<< HEAD
# Github Finder
[![NPM](https://img.shields.io/npm/l/react)](https://github.com/Amaralz/Github-Finder/blob/main/LICENSE) 

# Sobre o projeto

Github Finder é uma aplicação frontend com funcionalidade principal de buscar por usuários do GitHub e trazer os dados via resposta da API. Ensinado pelo professor [Matheus Battisti](https://horadecodar.com.br/cursos-horadecodar).

## Layout web
![image](https://github.com/user-attachments/assets/210b02e2-7861-477e-abed-8126101a86cf)



![image](https://github.com/user-attachments/assets/c62c37b1-d01b-4a46-bf0c-e336b27c62fa)


# Tecnologias utilizadas
## Front end
- HTML / CSS / JS / TypeScript
- ReactJS
- React Native

# Como executar o projeto

## Front end web
Pré-requisitos: npm 

```bash
# clonar repositório
git clone https://github.com/Amaralz/Github-Finder.git

# entrar na pasta do projeto Github_finder
cd Github_finder

# instalar dependências
npm install

# executar o projeto
npm run dev
```

# Autor
Lael Amaral Pitanga

https://www.linkedin.com/in/lael-pitanga-22a38b248/
=======
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
>>>>>>> 69390dc (adicionando o projeto)
