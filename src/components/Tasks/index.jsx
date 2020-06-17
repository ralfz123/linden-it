import React from 'react';
import { StyledTask } from './StyledTask';
import PropTypes from 'prop-types';


export const Task = ({ onClick, label, disabled }) => {
	return (
		<StyledTask 
			onClick={onClick} 
			label={label}
			disabled={disabled}>
			{label}
		</StyledTask>
	);
};

Task.propTypes = {
	disabled: PropTypes.any,
	label: PropTypes.string,
	onClick: PropTypes.func,
};