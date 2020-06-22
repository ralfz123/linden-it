import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
export const colors = {
	primary: '#FC7928',
	light: '#ffffff',
	dark: '#000000',
	gray: '#717171',
	grayDark: '#3b3b3b',
	grayLight: '#f4f4f4',
	grayLighter: '#f8f8f8',
	grayLightTwo: '#C4C4C4',
<<<<<<< HEAD
	grayLightThree: '#717171',
	grayLightFour: '#E5E5E5',
	red: '#D21919;',
	green: '#77dd77',
	tagNew: '#5DD8A4',
	tagProgress: '#FEC32E',
	tagFinished: '#22C7E4',
=======
	red: '#f44336;',
	green: '#66BB6A',
	tagNew: '#5DD8A4',
	tagProgress: '#FEC32E',
	tagFinished: '#22C7E4',
};
export const sizes = {
			paddingTop: '',
			paddingLeft: ' max(16px, var(--safe-area-inset-left))',
			paddingRight: 'max(16px, var(--safe-area-inset-right))',
			paddingBottom: '',
		};
/**
 * Converts a CSS hex color value to RGBA.
 * @param {string} hex - Expanded hexadecimal CSS color value.
 * @param {number} alpha - Alpha as a decimal.
 * @returns {string} RGBA CSS color value.
 */
export const addAlpha = (hex, alpha) => {
	const r = parseInt(hex.substring(1, 3), 16);
	const g = parseInt(hex.substring(3, 5), 16);
	const b = parseInt(hex.substring(5, 7), 16);
	return `rgba(${r}, ${g}, ${b}, ${alpha})`;
>>>>>>> ab935c75279661e69b7e6ee59f3a2c1d3b832693
};
const GlobalStyle = createGlobalStyle`
    ${normalize};
    :root {
        --safe-area-inset-top   : 16px;
    --safe-area-inset-right : 16px;
    --safe-area-inset-bottom: 16px;
    --safe-area-inset-left  : 16px;  
        --color-primary: #FC7928;
        --color-light: #ffffff;
        --color-dark: #000000;
        --color-gray: #989898;
        --color-gray-dark: #3b3b3b;
        --color-gray-light: #f4f4f4;
        --color-gray-lighter: #f8f8f8;
        --color-grayLightTwo: #C4C4C4;
        --tag-new:#5DD8A4;
        --tag-progress:#FEC32E;
        --tag-finished:#22C7E4;

        --font-family-heading: 'Josefin Sans', sans-serif;
        --font-family: 'Lato', sans-serif;

        @supports (top: constant(safe-area-inset-top)){
            --safe-area-inset-top : constant(safe-area-inset-top);
            --safe-area-inset-right : constant(safe-area-inset-right);
            --safe-area-inset-bottom: constant(safe-area-inset-bottom);
            --safe-area-inset-left : constant(safe-area-inset-left); 
        }
        @supports (top: env(safe-area-inset-top)){
            --safe-area-inset-top : env(safe-area-inset-top);
            --safe-area-inset-right : env(safe-area-inset-right);
            --safe-area-inset-bottom: env(safe-area-inset-bottom);
            --safe-area-inset-left : env(safe-area-inset-left); 
        }
}
${
	'' /* 
body {
padding-top: 12px;
padding-top: var(--safe-area-inset-top, 12px);
} */
}
    }
    html {
        box-sizing: border-box;
        overflow-y: scroll;
       
        
    }
    *, *:before, *:after {
        box-sizing: border-box;
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
    #root{
        -webkit-overflow-scrolling: touch;
         &:after {
		content:'';
		position: fixed;
		background-color: ${colors.primary};
		top:0;
		right:0;
		left:0;
		width: 100vw;
		min-height:50%;
		z-index:0;
	}
    }
    
    header {
        ${'' /* position: sticky; */}
        top: 0;
        width: 100%;
        
       z-index: 2;
        padding-left: max(16px, env(safe-area-inset-left));
        padding-right: max(16px, env(safe-area-inset-right));
        padding-top: max(0px, env(safe-area-inset-top)); 	
        background-color: ${colors.primary};
        
    }
    main {
        padding-left: min(16px, env(safe-area-inset-left));
        padding-right: min(16px, env(safe-area-inset-right));
        position:relative;
       flex-grow:1;
        box-sizing:border-box;
        z-index:1;
        background-color:var(--color-light);
        height:auto;
        padding-bottom:50px;
        padding-bottom: calc(50px + env(safe-area-inset-bottom));
        -webkit-overflow-scrolling: touch;
    }
    footer {
        position: fixed;
        width:100%;
        left: 0;
        right: 0;
        bottom: 0;
        z-index:3;
        padding-left: 0;
        padding-right: 0;
        padding-bottom: 0;
        padding-left: max(0px, env(safe-area-inset-left));
        padding-right: max(0px, env(safe-area-inset-right));
        padding-bottom: max(0px, env(safe-area-inset-bottom));
    }
    h1,h2,h3,h4,h5{
        font-family: var(--font-family-heading);
        font-weight:600;
    }
    p {
        margin:0;
        padding:5px 0;
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
        padding-top: 4em;
        margin: auto;
        padding-left: max(16px, env(safe-area-inset-left));
        padding-right: max(16px, env(safe-area-inset-right));
    }
    .field {
        /* background-color:lightgreen; */
        text-align:left;
        padding-bottom:20px;
    }
    label {
        
        font-family: var(--font-family-heading);
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 18px;
        color: ${colors.grayDark};
        text-align: left;
        ${'' /* width: 100%; */}
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
        padding: 10px 0px;
    }
    .privacy {
        margin: 0px auto;
        margin-top: 30px;
        text-align: center;
        padding: 20px 10px;
        min-width: 50%;
    }
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

${'' /* ********************* Agenda page ********************* */}
.task-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    ${'' /* flex-direction: column; */}
    width: 100%
}
.task-container p {
    width: 100%;
    text-align: left;
    margin-left: 12px;
    font-size: 1em
}

.task-container div {
    background-color: ${colors.grayLight};
    color: ${colors.grayLightThree};
    border-radius: 100%;
    padding: 14px 20px;
}

.agenda-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    flex-direction: row;
}

.agenda-container .left {
    ${'' /* margin-right: 20px;    */}
    ${'' /* padding-right: 70px; */}
    width: 150px;
}

.agenda-container .left h2 {
    margin-bottom: 0px;
    font-family: var(--font-family);    
}

.agenda-container .left .arrowdown-icon {
    margin-bottom: 0px;
    
}

.agenda-container .right {
    ${'' /* margin-left: 20px; */}
}

.agenda-icon {
    font-size: 30px;
}

.change-icon {	
    fill: ${colors.primary};
	background-color: ${colors.light};
    ${'' /* stroke-width: 1; */}
    ${'' /* stroke: ${colors.grayLightThree}; */}
	width: 20px;
	height: 20px;
	border-radius: 60px;
	padding: 1px;
    }


${'' /* ***************** Setting goals ***************** */}
    .settinggoals-container {
        font-family: Lato;
        font-style: normal;
        font-weight: bold;   
        color: ${colors.grayLightThree};
    }
    
    .container {
      display:flex;
      flex-direction:column;
    }
    .timereminders {
        ${
			'' /* display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        flex-direction: row; */
		}
    }
    .timereminders .question {
        display:flex;
        align-items:flex-start;
    }
                ${'' /* ***************** pushbuttons ***************** */}
    .container-pushbuttons {
        display: flex;
        justify-content: space-between;
        
        flex-direction: row;
        ${'' /* width: auto; */}
        ${'' /* margin-bottom: 20px; */}
        
    }
 
    .pushbuttons {
        display:flex;
        
    }
    .pushbuttons > div {
        width: 35px;
        height: 35px;
        padding: 5px 7px;
        font-family: Lato;
        font-style: normal;
        font-weight: normal;
        background-color: ${colors.light};
        color: ${colors.grayLightThree};
        border: 1px solid ${colors.gray};
        border-radius: 100%;
    }
    .pushbuttons input {
        position: relative;
        
        
        opacity: 0;
    }
    .pushbuttons input:checked + div {
        background-color: ${colors.primary};
        color: ${colors.light};
        border: 1px solid ${colors.primary};
    }
    
    .advice {
        
		display:flex;
        flex-wrap:wrap;
        flex-direction: row;
        justify-content: flex-start; 
        
    }
    .advice label:nth-child(3) {
        ${'' /* width: 30%; */}
        color: ${colors.grayLightThree};
        ${'' /* margin: 0px 10px; */}
        font-family: Lato;
        font-style: normal;
        font-weight: normal;
        font-size: 1em;
    }
    
    .step-counter {
        font-family: Josefin Sans;
        font-size: 1em;
        color: ${colors.primary};
        padding:1em 0;
        ${'' /* margin-top: 0; */}
    }
    ${'' /* ********************** onboarding pages ********************** */}
   .container.onboarding-page {
        background-color: ${colors.primary};
        color: ${colors.light};
        align-items:center;
        justify-content:space-between;
        height:100%;

        h2 {
            font-size:36px;
        }
        ${
			'' /* flex-wrap: wrap;
        flex-direction: row;
        justify-content: center; */
		}
        
    }
    .container {
        
        justify-content:space-flex-start;
        height:100%;
        padding-bottom:1em;
        ${
			'' /* flex-wrap: wrap;
        flex-direction: row;
        justify-content: center; */
		}
        
    }
    .onboarding-page .onboarding-icon { 
        font-size: 40px;
        align-self:center;
        
        width: 100%;
    }
    .onboarding-page h2 { 
        ${'' /* width: 50%; */}
        text-align: center;
        ${'' /* margin: 10px 10px 30px 10px; */}
    }
    
    .onboarding-page div {
        font-weight: normal;
    }
    .onboarding-page p {
        color: ${colors.light};
        font-size: 15px;
        text-align: center;
        font-weight:300;
        ${'' /* width: 60%; */}
        ${'' /* margin: 10px 10px 30px 10px; */}
    }
    .settinggoals-container .studyday-label {
        font-family: Lato;
        font-style: normal;
        font-weight: 400;
        font-size: .8em;
        ${'' /* margin-bottom: -5px; */}
}
.settinggoals-container{
    display:flex;
    flex-direction:column;

}

.bottom-drawer {
    position:fixed;
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:flex-start;
    width:100%;
    background-color:${colors.light};
    margin-top:30px;
    top:60px;
	bottom:0;
    height:auto;
    padding-bottom:0px; 
    border-radius:10px 10px 0 0;
        overflow:hidden;
        min-height:60vh;
        z-index:9999;
	}
.onboarding-button{
    align-self:center;
}
.toggle {
    top:0;
    float:right;
}
`;

export default GlobalStyle;
