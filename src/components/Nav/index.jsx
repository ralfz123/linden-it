import React from 'react';
import styled from 'styled-components';
import { colors } from '../../GlobalStyle.js';
import { NavLink } from 'react-router-dom';
import { FiHome, FiSettings, FiBook, FiCalendar } from 'react-icons/fi';

// Tab component styling
const Tab = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	box-sizing: border-box;
	a {
		flex-grow: 1;
		text-align: center;
		min-height: 50px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		color: ${colors.gray};
		text-decoration: none;
		padding: 0;
		font-size: 12px;

		&.active {
			color: ${colors.primary};
		}
		.react-icons {
			font-size: 24px;
		}
	}
`;

// Export Tab component
export const Nav = () => {
	return (
		<Tab>
			<NavLink exact to='/'>
				<FiHome className='react-icons' />
				<span>Home</span>
			</NavLink>
			<NavLink to='/courses'>
				<FiBook className='react-icons' />
				<span>Cursussen</span>
			</NavLink>
			<NavLink to='/agenda'>
				<FiCalendar className='react-icons' />
				<span>Agenda</span>
			</NavLink>
			<NavLink to='/settings'>
				<FiSettings className='react-icons' />
				<span>Instellingen</span>
			</NavLink>
		</Tab>
	);
};

// Do not understand which propTypes have to be here? Because see Ln.34
// Nav.propTypes = {
// 	children: PropTypes.object
// };
export default Nav;
