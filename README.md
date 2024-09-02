# Spotify Login Page

## Descrição

Este projeto é uma implementação de uma página de login para o Spotify, desenvolvida em React utilizando o Vite como ferramenta de construção. O objetivo principal foi criar e reutilizar componentes, além de utilizar propriedades (props) para passar informações entre eles. Ao submeter o formulário de login, os dados inseridos são exibidos no console do navegador.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para criação de interfaces de usuário.
- **Vite**: Ferramenta de construção rápida para projetos front-end.
- **CSS**: Estilização personalizada da página de login.

## Funcionalidades

- **Formulário de Login**: Inclui campos para nome de usuário, email e senha.
- **Exibição de Dados no Console**: Ao submeter o formulário, os dados são capturados e exibidos no console do navegador.
- **Componentes Reutilizáveis**: Estrutura do projeto modularizada com componentes React.

## Estrutura do Projeto

```bash
📦spotify-login
 ┣ 📂public
 ┣ 📂src
 ┃ ┣ 📂components
 ┃ ┃ ┣ 📜Header.jsx
 ┃ ┃ ┣ 📜Forms.jsx
 ┃ ┃ ┗ 📜Footer.jsx
 ┃ ┣ 📂styles
 ┃ ┃ ┣ 📜App.css
 ┃ ┃ ┣ 📜Header.css
 ┃ ┃ ┣ 📜Forms.css
 ┃ ┃ ┗ 📜Footer.css     
 ┃ ┣ 📜App.jsx
 ┃ ┗ 📜main.jsx
 ┣ 📜index.html
 ┣ 📜package.json
 ┗ 📜vite.config.js
```
# Como Executar o Projeto
## Siga as instruções abaixo para clonar e executar o projeto localmente:

Clone o repositório:

```bash
git clone https://github.com/joaopaulo/spotify-login.git
```
```bash
cd spotify-login
```
Instale as dependências:
```bash
npm install
```
Execute o projeto:
```bash
npm run dev
```
Exemplo de Uso
Ao carregar a página, você verá um formulário de login com campos para nome de usuário, email e senha. Após preencher e submeter o formulário, os dados inseridos serão exibidos no console do navegador.
