import { createGlobalStyle } from 'styled-components'

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
    body, #root {
        height:100%;
        display:flex;
        flex-direction:column;
        margin:0;
        min-height:100vh;
        min-height: -webkit-fill-available;
        font-family: var(--font-family);
    
        }
    header{
        z-index:2;
        padding-left: max(8px, env(safe-area-inset-left));
        padding-right: max(8px, env(safe-area-inset-right));
        padding-top: max(8px, env(safe-area-inset-top));
    }
    main {
    z-index:1;
    }
    footer {
        z-index:2;
    }
    h1,h2,h3,h4,h5{
        font-family: var(--font-family-heading)
    }
`
export default GlobalStyle
