import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';



const Nav = styled.nav`
	position: fixed;
	left: 0;
	right: 0;
	bottom: 0;
	display: flex;
	justify-content: space-between;
	width: 100vw;
	background-color: var(--color-gray-light);
	padding: 8px;
	padding-bottom: env(safe-area-inset-bottom, 8);

	a {
		flex-grow: 1;
		text-align: center;
		min-height: 50px;
		display: flex;
		flex-direction: column;
		text-align: center;
		justify-content: center;
		align-items: center;
		color: var(--color-gray);
		text-decoration: none;

		&.active {
			color: var(--color-primary);
		}
		ion-icon {
			font-size:32px;
			}
		
	}
`;

export const Tabs = () => {
    return (
		<Nav>
			<NavLink to="/">
				<ion-icon name="home"></ion-icon>
				<span>Home</span>
			</NavLink>
			<NavLink to="/courses">
				<ion-icon name="reader"></ion-icon>
				<span> Courses</span>
			</NavLink>
			<NavLink to="/agenda">
				<ion-icon name="today"></ion-icon>
				<span> Agenda</span>
			</NavLink>
			<NavLink to="/settings">
				<ion-icon name="cog"></ion-icon>
				<span>Settings</span>
			</NavLink>
		</Nav>
	);
}

export default Tabs;

