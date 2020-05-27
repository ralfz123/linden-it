import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`



:root {
    --color-primary: #FC7928;
    --color-light: #ffffff;
    --color-dark: #000000;
    --color-gray: #989898;
    --color-gray-dark: #3b3b3b;
    --color-gray-light: #f4f4f4;

    --font-family-heading: 'Josefin Sans', sans-serif;
    --font-family: 'Lato', sans-serif;

}
body {
    display:flex;
    flex-direction:column;
    margin:0;
    min-height:100vh;
    min-height: -webkit-fill-available;
    font-family: var(--font-family);
    }
html {
  height: -webkit-fill-available;
}

h1,h2,h3,h4,h5{
    font-family: var(--font-family-heading)
}

`;

export default GlobalStyle;
