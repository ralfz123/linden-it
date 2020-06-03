import { createGlobalStyle } from "styled-components";

export const colors = {
        primary: "#FC7928",
        light: "#ffffff",
        dark: "#000000",
        gray: "#989898",
        grayDark: "#3b3b3b",
        grayLight: "#f4f4f4",
        grayLightTwo: "#C4C4C4"
};

const GlobalStyle = createGlobalStyle`
    :root {
        --color-primary: #FC7928;
        --color-light: #ffffff;
        --color-dark: #000000;
        --color-gray: #989898;
        --color-gray-dark: #3b3b3b;
        --color-gray-light: #f4f4f4;
        --color-grayLightTwo: #C4C4C4;
        --font-family-heading: 'Josefin Sans', sans-serif;
        --font-family: 'Lato', sans-serif;
    }
    html {
        box-sizing: border-box;
        background-color: var(--color-primary);
    }
    *, *:before, *:after {
        box-sizing: inherit;
    }
    body, #root {
        ${'' /* height:100vh; */}
        display:flex;
        flex-direction:column;
        margin:0;
        min-height:100vh;
        font-family: var(--font-family);
  
    }
    header{
        position: absolute;
        position: sticky;
        left: 0;
        right: 0;
        top: 0;
        width: 100vw;
        z-index:1;
        padding-left: max(8px, env(safe-area-inset-left));
        padding-right: max(8px, env(safe-area-inset-right));
        padding-top: max(8px, env(safe-area-inset-top)); 	
    }
    main {
        min-height:100vh;
        z-index:0;
        background-color:var(--color-light);
        padding-left: max(8px, env(safe-area-inset-left));
        padding-right: max(8px, env(safe-area-inset-right));
        padding-bottom: 100px;
        -webkit-overflow-scrolling: touch;
     
        
    }
    footer {
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        z-index:2;
        padding-left: max(0px, env(safe-area-inset-left));
        padding-right: max(0px, env(safe-area-inset-right));
        padding-bottom: max(0px, env(safe-area-inset-bottom));
    }
    h1,h2,h3,h4,h5{
        font-family: var(--font-family-heading)
    }
    .login {
        text-align: center;
    }
`;
export default GlobalStyle;

