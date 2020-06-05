import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
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
    ${normalize}
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
        height:100%;
        display:flex;
        flex-direction:column;
        margin:0;
        min-height:100vh;
        max-width: 100vw;
        font-family: var(--font-family);
        
  
    }
    header{
        
        position: sticky;
        left: 0;
        right: 0;
        top: 0;
        width: 100vw;
        z-index:1;
        padding-left: max(16px, env(safe-area-inset-left));
        padding-right: max(16px, env(safe-area-inset-right));
        padding-top: max(8px, env(safe-area-inset-top)); 	
    }
    main {
        position:relative;
       flex-grow:1;
        box-sizing:border-box;
        z-index:0;
        
        background-color:var(--color-light);
        padding-left: max(16px, env(safe-area-inset-left));
        padding-right: max(16px, env(safe-area-inset-right));
        -webkit-overflow-scrolling: touch;
    }
    footer {
        position: fixed;
        width:100%;
        left: 0;
        right: 0;
        bottom: 0;
        z-index:2;
        padding-left: max(0px, env(safe-area-inset-left));
        padding-right: max(0px, env(safe-area-inset-right));
        padding-bottom: max(0px, env(safe-area-inset-bottom));
    }
    h1,h2,h3,h4,h5{
        font-family: var(--font-family-heading);
    }


${'' /* Login page styles */}

    .login-wrapper {
        ${'' /* login */}
    }
    .login {
        text-align: center;
        
        /* display: flex; */
        /* flex-direction: row; */
        /* flex-wrap: wrap; */
        /* justify-content: center; */
        padding-top:4em;
        margin: auto;
    }
    .field {
        /* background-color:lightgreen; */
        text-align:left;
        padding-bottom:20px;
    }
    label {
        display: block;
        font-family: var(--font-family-heading);
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 18px;
        color: ${colors.grayDark};
        text-align: left;
        width: 100%;
        padding: 10px 0px;
}
    .link {
        text-decoration: none;
        color: ${colors.primary};
        margin: 0 auto;
        
        position: relative;
        
    }
    .pw-forgot {
        /* text-align:left; */
        font-family: var(--font-family);
        font-style: normal;
        font-weight: 300;
        font-size: 14px;
        line-height: 17px;
        text-align:left;
    }
    p {
        font-family: var(--font-family);
        font-style: normal;
        font-weight: 300;
        font-size: 14px;
        line-height: 17px;
        color: ${colors.grayDark};
        display: block;
        margin: 0px auto;
        margin: 10px 0px;
    }
    .privacy {
        margin: 0px auto;
        margin-top: 30px;
        text-align: center;
        padding: 20px 10px;
        min-width: 50%;

    }
    .eye {}
    i {
        position: absolute;
        top: 225px;
        right: 60px;
        cursor: pointer; 
        
    }
    i:hover {
        color: ${colors.primary};
         cursor: pointer;
}

${'' /* Card Styles */}


`;

export default GlobalStyle;
