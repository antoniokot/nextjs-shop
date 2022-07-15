import { createGlobalStyle } from "styled-components"

export default createGlobalStyle `
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      color: var(--white);
  }
  html, border-style, #root {
      max-height: 100vh;
      max-width: 100vw;
      width: 100%;
      height: 100%;
  }
  *, button, input {
      border: 0;
      background: none;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  html {
      background: var(--primary);
  }
  :root {
      --primary: #ABC9FF;
      --secondary: #6E85B7;
      --search: #898AA6;
      --white: #FFF;
      --gray: #7A7A7A;
      --outline: #2F3336;
      --retweet: #00C06B;
      --like: #E8265E;
      --twitter: #33A1F2;
      --twitter-dark-hover: #011017;
      --twitter-light-hover: #2C8ED6;
  }
`; 