import React from 'react';
import { StyledTask } from './StyledTask';
import PropTypes from 'prop-types';
import { FaPencilAlt } from 'react-icons/fa';
import { FiBell, FiCheck } from 'react-icons/fi';

// Agenda task component - NOT FINISHED
export const Task = ({ onClick, label, children }) => {
	return (
		<div className='task-container'>
			<p>Ma</p>
			<div>8</div>
			<StyledTask onClick={onClick} label={label}>
				{/* <FiCheck className='check-icon' /> */}		
				<FiBell className='bell-icon' />
				{children}

				{/* Or a dynamic pageNumbers AND dayNumber */}
				
				<FaPencilAlt className='pencil-icon' />
			</StyledTask>
		</div>
	);
};

// PropTypes Agenda Task
Task.propTypes = {
	disabled: PropTypes.any,
	label: PropTypes.string,
	onClick: PropTypes.func,
};
