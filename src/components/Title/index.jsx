import React from 'react';
import PropTypes from 'prop-types';
import StyledHeading from './StyledHeading.js';

export const Title = ({ title }) => {
	return (
		<StyledHeading>
			{title}
		</StyledHeading>
	);
};

Title.propTypes = {
	title: PropTypes.string
};

export default Title;
