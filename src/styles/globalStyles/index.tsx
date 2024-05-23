import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Helvetica Neue', sans-serif;
    background-color: #8bc6ec;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }
`;

export default GlobalStyle;
