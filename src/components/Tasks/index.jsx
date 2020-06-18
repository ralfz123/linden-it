import React from 'react';
import { StyledTask } from './StyledTask';
import PropTypes from 'prop-types';
import { FaPencilAlt } from 'react-icons/fa';

export const Task = ({ onClick, label, children }) => {
	return (
		<div className='task-container'>
			<p>Ma</p>
			<div>8</div>
			<StyledTask onClick={onClick} label={label}>
				{children}
				{/* Or a dynamic pageNumbers AND dayNumber */}
				<FaPencilAlt />
			</StyledTask>
		</div>
	);
};

Task.propTypes = {
	disabled: PropTypes.any,
	label: PropTypes.string,
	onClick: PropTypes.func,
};
