import React from 'react';
import { StyledTask } from './StyledTask';
import PropTypes from 'prop-types';
import { FaPencilAlt } from 'react-icons/fa';
import { FiBell } from 'react-icons/fi';

export const Task = ({ onClick, label, children }) => {
	return (
		<div className='task-container'>
			<p>Ma</p>
			<div>8</div>
			<StyledTask onClick={onClick} label={label}>
				<FiBell className='bell-icon' />
				{children}
				{/* Or a dynamic pageNumbers AND dayNumber */}
				<FaPencilAlt className='pencil-icon' />
			</StyledTask>
		</div>
	);
};

Task.propTypes = {
	disabled: PropTypes.any,
	label: PropTypes.string,
	onClick: PropTypes.func,
};
