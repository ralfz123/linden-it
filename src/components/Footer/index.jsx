import React from "react";
import StyledFooter from './StyledFooter';

const Footer = ({ children }) => {
	return (
		<StyledFooter>
			{children}
		</StyledFooter>
	)
};

export default Footer;
