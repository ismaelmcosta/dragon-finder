import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    height: 100%;
   
  }

  body {
    -webkit-font-smoothing: antialiased;
    background: linear-gradient(90deg, #06e774, #93f3ec);
  }

  body, input, button {
    font: 14px 'Roboto', sans-serif;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }

 .content{
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  
 }
  
 
 span.inputError{
    font-size: 10px;
    display: block;
    margin-top: 3px;
    color: #e02041;
}

`;
