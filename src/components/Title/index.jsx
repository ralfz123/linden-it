import React from 'react';
import PropTypes from 'prop-types';
import StyledHeading from './StyledHeading.js';

// Export Title component
export const Title = ({ title }) => {
	return (
		<StyledHeading>
			{title}
		</StyledHeading>
	);
};

// PropTypes Title
Title.propTypes = {
	title: PropTypes.string
};

export default Title;
