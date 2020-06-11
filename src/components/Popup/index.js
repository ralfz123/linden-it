import React from "react";
import styled from "styled-components";
import { colors } from "../../GlobalStyle";
import { AiOutlineExclamationCircle } from "react-icons/ai";

const StyledPopup = styled.div`
	height: 50px;
	padding: 8px;
	background-color: ${colors.grayLight};
	text-align: left;
	/* width: 100%; */
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	flex-wrap: wrap;
	width: 100vw;
	position: absolute;
	z-index: 10;
	left: 0;

	p {
		font-family: Lato;
		font-style: normal;
		font-weight: normal;
		font-size: 11px;
		line-height: 13px;
		color: ${colors.red};
		color: ${colors.red};
	}

	.error-icon {
		font-size: 30px;
		text-align: left;
		color: ${colors.red};
		margin: 0 auto;
		width: 20%;
	}
`;
export const Popup = ({ children }) => {
	return (
		<StyledPopup>
			<AiOutlineExclamationCircle className='error-icon' />
			{children}
		</StyledPopup>
	);
};

export default Popup;
