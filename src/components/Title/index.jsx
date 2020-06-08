import React from 'react';
import StyledHeading from './StyledHeading.js'

export const Title = ({ title }) => {
	return (
		<StyledHeading>
			{title}
		</StyledHeading>
	);
}

export default Title;
