import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { colors, sizes } from '../../GlobalStyle';

const StyledMain = styled(motion.main)`
	/* height: 100%; */
	/* background:orange; */
	padding-left: ${sizes.paddingLeft};
	padding-right: ${sizes.paddingRight};
	padding-left: 16px;
	padding-right: 16px;
`;
export const Content = ({ children }) => {
	return <StyledMain>{children}</StyledMain>;
};

const StyledOverlay = styled.div`
	height: 100%;
	background: ${colors.light};
	padding-left: 16px;
	padding-right: 16px;
	padding-left: ${sizes.paddingLeft};
	padding-right: ${sizes.paddingRight};
	position: relative;
	width: 100%;
	box-sizing: border-box;
	.doelen-vaststellen {
		display: flex;
		flex-direction: column;
		width: 100%;
		height: auto;
		justify-content: space-between;
		padding-bottom: 50px;
	}
	&.overlay-1 &.overlay-2 &.overlay-3 &.overlay-4 {
		justify-content: space-between;
		align-content: stretch;
		.doelen-vaststellen {
			display: flex;
			flex-direction: column;
			width: 100%;
			height: 100%;
			justify-content: space-around;
		}
	}

	&.overlay-1,
	&.overlay-4 {
		background: ${colors.primary};
		justify-content: space-between;
	}
	&.overlay-1,
	&.overlay-4 {
		background: ${colors.primary};
		justify-content: space-between;
		align-content: stretch;

		.doelen-vaststellen {
			display: flex;
			flex-direction: column;
			width: 100%;
			height: 100%;
			justify-content: space-around;
		}
	}
`;
export const ContentOverlay = ({ children, className }) => {
	return <StyledOverlay className={className}>{children}</StyledOverlay>;
};


Content.propTypes = {
	children: PropTypes.any,
};

export default Content;
