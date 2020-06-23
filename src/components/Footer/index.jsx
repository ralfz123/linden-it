import React from 'react';
import PropTypes from 'prop-types';
import StyledFooter from './StyledFooter';

// Footer component of all the pages - the children will be in the nav component
const Footer = ({ children }) => {
	return (
		<StyledFooter>
			{children}
		</StyledFooter>
	);
};

// PropTypes Footer component
Footer.propTypes = {
	children: PropTypes.any
};

export default Footer;
