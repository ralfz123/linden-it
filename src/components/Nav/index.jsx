import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FiHome, FiSettings, FiBook, FiCalendar } from "react-icons/fi";

const Tab = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100vw;
	box-sizing: border-box;
	a {
		flex-grow: 1;
		text-align: center;
		min-height: 50px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		color: var(--color-gray);
		text-decoration: none;
		padding: 3px 0;
		font-size: 12px;

		&.active {
			color: var(--color-primary);
		}
		.react-icons {
			font-size: 24px;
		}
	}
`;

export const Nav = ({ children }) => {
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
}

export default Nav;
