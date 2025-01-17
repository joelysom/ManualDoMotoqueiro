
# Documentação do Projeto: **História da Moto e Cuidados(Manual do Motoqueiro)**

Este projeto foi criado utilizando **React** e outras bibliotecas para fornecer uma experiência interativa sobre a história das motos, manobras de risco, e cuidados necessários para a manutenção de motos. O site é dividido em várias seções que carregam informações dinâmicas, como histórias, manobras e dicas de cuidados com imagens associadas.

## Funcionalidades

O projeto possui as seguintes funcionalidades principais:

1. **História da Moto**:
   - Exibe a história da primeira moto do mundo, com texto e imagens relacionadas.
   
2. **Manobras de Risco**:
   - Lista manobras de risco realizadas por motociclistas, com a capacidade de carregar essas informações dinamicamente de uma API.

3. **Como Cuidar da Sua Moto**:
   - Exibe dicas úteis e cuidados essenciais para manter a moto em boas condições. Cada dica é apresentada com uma imagem correspondente.

Além disso, o projeto utiliza **React Router** para navegação entre as diferentes páginas e um sistema assíncrono para carregar as informações dinamicamente usando **React Hooks**.

## Estrutura do Projeto

O projeto é estruturado da seguinte forma:

```
/public
    /images
        - title.png
        - primeira.jpg
        - primeira_0.jfif
        - oleo.png
        - pneus.png
        - corrente.png
        - freio.png
/src
    /components
        - HistoriaDaMoto.js
        - ManobrasDeRisco.js
        - ComoCuidar.js
    /App.js
    /index.js
    /routes.js
    /App.css
    /manobras-de-risco.css
    /como-cuidar.css
    /historia-da-moto.css
/package.json
```

### Componentes Principais

- **`HistoriaDaMoto.js`**: Componente responsável por exibir a história da moto, com a capacidade de carregar o conteúdo dinamicamente de uma API.
- **`ManobrasDeRisco.js`**: Componente responsável por listar as manobras de risco, carregando os dados de uma API.
- **`ComoCuidar.js`**: Componente que apresenta dicas sobre como cuidar da moto, com imagens associadas a cada dica.
- **`App.js`**: Componente principal que gerencia as rotas e exibe os diferentes componentes da aplicação.

## Dependências

Abaixo estão as dependências utilizadas no projeto e suas respectivas versões:

```json
"dependencies": {
  "@react-three/drei": "^9.121.2",
  "@react-three/fiber": "^8.17.12",
  "cra-template": "1.2.0",
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-router-dom": "^7.1.2",
  "react-scripts": "5.0.1",
  "three": "^0.172.0",
  "web-vitals": "^4.2.4"
}
```

### Descrição das Dependências

- **`@react-three/drei`**: Biblioteca que fornece componentes e hooks prontos para usar no React Three.js. Essencial para criar gráficos 3D com o Three.js no React de forma fácil.
  
- **`@react-three/fiber`**: É o principal pacote do Three.js para React, permitindo que o Three.js funcione com o paradigma de componentes do React. Permite criar cenas 3D no React.

- **`cra-template`**: Modelo de template usado para iniciar rapidamente um projeto com **Create React App**.

- **`react`**: Biblioteca principal para a construção de interfaces de usuário interativas e componentes reutilizáveis.

- **`react-dom`**: Biblioteca necessária para renderizar o React na árvore DOM do navegador.

- **`react-router-dom`**: Permite a navegação entre páginas dentro de uma aplicação React. Utilizado para criar a navegação entre as diferentes páginas do projeto, como "História da Moto", "Manobras de Risco" e "Como Cuidar".

- **`react-scripts`**: Conjunto de scripts usados para rodar, construir e testar a aplicação em um ambiente React criado com o Create React App.

- **`three`**: Biblioteca principal do Three.js para renderização de gráficos 3D. Utilizada para criar e manipular objetos 3D e cenas no navegador.

- **`web-vitals`**: Ferramenta para medir a performance da aplicação na web. Ajuda a medir métricas de performance importantes como o tempo de carregamento e a interatividade da página.

## Tecnologias Usadas

- **React.js**: Framework JavaScript usado para construir a interface do usuário. Ele é eficiente e permite a construção de aplicações de página única (SPA) interativas.
  
- **React Router**: Utilizado para realizar a navegação entre as páginas do site sem recarregar a página inteira, criando uma experiência de navegação mais fluída.
  
- **Three.js**: Usado para renderizar gráficos 3D no navegador. Embora não seja utilizado diretamente no projeto atual, foi adicionado como dependência para expandir o projeto no futuro, caso seja necessário adicionar elementos 3D.

- **CSS**: Usado para estilizar os componentes da aplicação, criando uma interface de usuário atraente e responsiva.

## Instalação e Execução

Para executar o projeto localmente, siga os passos abaixo:

### 1. Clone o Repositório

```bash
git clone https://github.com/usuario/projeto-moto.git
```

### 2. Instale as Dependências

Navegue até o diretório do projeto e instale as dependências:

```bash
cd projeto-moto
npm install
```

### 3. Execute o Projeto

Para iniciar o servidor de desenvolvimento, use o seguinte comando:

```bash
npm start
```

Isso irá abrir o aplicativo no navegador, geralmente na URL `http://localhost:3000`.

## Estrutura CSS

As páginas do projeto são estilizadas com arquivos CSS separados para cada componente. Isso permite a modularidade e manutenção fácil.

- **`historia-da-moto.css`**: Estiliza a página de "História da Moto".
- **`manobras-de-risco.css`**: Estiliza a página de "Manobras de Risco".
- **`como-cuidar.css`**: Estiliza a página de "Como Cuidar da Sua Moto".

## Conclusão

Este projeto fornece uma aplicação interativa sobre motos, incluindo história, manobras e cuidados essenciais. Ele utiliza React para renderizar o conteúdo dinâmico e permite uma navegação fluída entre as diferentes páginas do site.

Com o uso de bibliotecas modernas como **React**, **React Router**, e **Three.js**, o projeto está preparado para ser expandido e melhorado no futuro, com a possibilidade de adicionar mais funcionalidades, gráficos interativos e muito mais.
