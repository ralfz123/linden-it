import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from '../../GlobalStyle';
import { AiOutlineExclamationCircle } from 'react-icons/ai';

const StyledPopup = styled.div`
	background-color: ${colors.grayLight};
	height: 50px;
	padding: 8px;
	margin: 0 auto;
	text-align: left;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	flex-wrap: wrap;
	width: 100vw;
	position: absolute;
	z-index: 10;
	left: 0;

	div {
		font-family: var(--font-family);
		font-style: normal;
		font-weight: normal;
		font-size: 11px;
		line-height: 13px;
		color: ${colors.red};
		width: 84%;
	}
	.error-icon {
		font-size: 30px;
		text-align: left;
		color: ${colors.red};
		/* margin: 0 auto; */
		width: 10%;
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

Popup.propTypes = {
	children: PropTypes.any,
};

export default Popup;
