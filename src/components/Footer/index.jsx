import React from 'react';
import PropTypes from 'prop-types';
import StyledFooter from './StyledFooter';

const Footer = ({ children }) => {
	return (
		<StyledFooter>
			{children}
		</StyledFooter>
	);
};

Footer.propTypes = {
	children: PropTypes.any
};

export default Footer;
