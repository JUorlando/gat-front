import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    --color-block: #DE5A53;
    --color-primary-focus: #FF427F;
    --color-primary-negative: #59323F;
    --color-grey-4: #141614;
    --color-grey-3: #1E1E1E;
    --color-grey-2: #343B41;
    --color-grey-1: #868E96;
    --color-grey-0: #EFEFEF;
    --color-success: #3FE864;
    --color-warning: #FFCD07;
    --color-error: #E83F5B;
    font-size: 60%;   
  }
  * {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
  }
  body,html{
    width: 100vw;
    height: 100vh;
  }
  body {
    background: var(--color-grey-0);
    color: var(--color-grey-0);
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }
  body, input, button, textarea {
    font-family: 'Sora', sans-serif;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  a{
        color: unset;
        text-decoration: none;
    }

  ul, ol, li{
        list-style: none;
    }

  button {
    cursor: pointer;
    border: none;
    background: transparent;
    color: var(--color-grey-0);
  }
  /* width */
  ::-webkit-scrollbar {
    width: 10px;
  }
  /* Track */
  ::-webkit-scrollbar-track {
    background: var(--color-grey-1);
    margin: 1rem;
    border-radius: 1.6rem;
  }
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: var(--color-grey-2);
    border-radius: 1.6rem;
  }
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: var(--color-grey-4);
  }
`;