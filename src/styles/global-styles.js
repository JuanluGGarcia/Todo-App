import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before{
    box-sizing: border-box;
    margin: 0;
  }

  img{
    display: block;
    max-width: 100%;
  }
  
  body{
    background-color: #000;
    color: #fff;
    font-family: sans-serif;
  }

  a{
    text-decoration: none;
    color: inherit;
  }

  ul{
    list-style: none;
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 0;
  }

  .todoWrapper {
    width: 100%;
    height: 50vh;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
    background-image: url('./public/images/bg-desktop-dark.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    padding: 1px;
  }

  .todoContainer {
    width: 450px;
    height: 300px;
    margin: 50px auto;
    /* background-color: orange; */
  }
`;
