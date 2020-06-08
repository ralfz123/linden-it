import React from "react";
import styled from "styled-components";
import { colors } from "../../GlobalStyle";

const StyledPopup = styled.div`
	height: 50px;
	padding: 8px;
	background-color: ${colors.grayLight};
	text-align: center;
    width: 100%;
    display: block;

	p {
		font-family: Lato;
		font-style: normal;
		font-weight: normal;
		font-size: 11px;
        line-height: 13px;
		color: ${colors.red};
	}
`;
export const Popup = ({ children }) => {
	return <StyledPopup>{children}</StyledPopup>;
};

export default Popup;
