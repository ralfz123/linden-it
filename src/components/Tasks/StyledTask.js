import styled from 'styled-components';
import { colors } from '../../GlobalStyle.js';

export const StyledTask = styled.section`
	background-color: ${colors.light};
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
	border-radius: 5px;
	min-height: 50px;
	height: 48px;
	line-height: 48px;
	text-decoration: none;
	margin-left: 10px;
    width: 70%;
    padding: 0 40px;

    .bell-icon-background {
        background-color: ${colors.grayLightTwo};
        display: inline-block;
        border-radius: 50%;
        height: 30px;
        width: 30px;
        margin: 0;
    }

    .bell-icon {
        fill: ${colors.grayLightThree};
        position: absolute;
    }

    .pencil-icon {

    }

    /* current day */
    p:active. div:active {
        background-color: ${colors.primary};
        color: ${colors.light};
        font-weight: 400;
    }
`;
