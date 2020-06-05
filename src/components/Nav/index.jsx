import React, { Component } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FiHome, FiSettings } from "react-icons/fi";
import { RiBookLine } from "react-icons/ri";
import { FaRegCalendar } from "react-icons/fa";

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

export default class Nav extends Component {
	render() {
		return (
			<Tab>
				<NavLink exact to='/'>
					<FiHome className='react-icons' />
					<span>Home</span>
				</NavLink>
				<NavLink to='/courses'>
					<RiBookLine className='react-icons' />
					<span>Courses</span>
				</NavLink>
				<NavLink to='/agenda'>
					<FaRegCalendar className='react-icons' />
					<span>Agenda</span>
				</NavLink>
				<NavLink to='/settings'>
					<FiSettings className='react-icons' />
					<span>Settings</span>
				</NavLink>
			</Tab>
		);
	}
}
