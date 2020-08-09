import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    font-family: Helvetica, Sans-Serif;
    box-sizing: border-box;
  }

  h1, h2, h3 {
    font-family: 'Times New Roman', Times, serif;
  }

  a {
    text-decoration: none;
  }

  li {
    list-style-type: none;
  }
`;

export default GlobalStyle;
