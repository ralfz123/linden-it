import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const StyledMain = styled(motion.main)`
	/* height: 100%; */
	
`;
export const Content = ({ children }) => {
	return <StyledMain>{children}</StyledMain>;
};

Content.propTypes = {
	children: PropTypes.any,
};

export default Content;
