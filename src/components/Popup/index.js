import React from "react";
import styled from "styled-components";
import { colors } from "../../GlobalStyle";
import { AiOutlineExclamationCircle } from "react-icons/ai";

const StyledPopup = styled.div`
	height: 50px;
	padding: 8px;
	background-color: ${colors.grayLight};
	text-align: left;
	width: 100%;
	display: block;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;


	p {
		font-family: Lato;
		font-style: normal;
		font-weight: normal;
		font-size: 11px;
		line-height: 13px;
		color: ${colors.red};
		color: red;
	}

	.icoontje {
		font-size: 30px;
		text-align: left;
		color: red;
		margin: 0 auto;
		width: 20%;
	}
`;
export const Popup = ({ children }) => {
	return <StyledPopup>
				<AiOutlineExclamationCircle className="icoontje"/>
				{children}
			</StyledPopup>;
};

export default Popup;
