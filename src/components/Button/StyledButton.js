import styled, {css} from "styled-components";
import {colors} from "../../GlobalStyle.js"

const StyledButton = styled.button`
    background-color: ${colors.primary};
    border: 1px solid ${colors.primary};
    color: var(--color-light);
    border-radius:100px;
    min-height:50px;
    width: 100%;
    height:48px;
    line-height:48px;
    text-decoration:none ;
    font-size:14px;
    padding:0 64px;
    cursor:pointer;

    &:hover 
        background-color:${colors.light};

    ${props => props.outline && css`

    `}

`;
export default StyledButton;
