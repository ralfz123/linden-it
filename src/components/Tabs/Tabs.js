import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { IoIosHome, IoIosCopy, IoIosToday, IoIosCog } from "react-icons/io";

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

export default class Tabs extends React.Component {
	render() {
		return (
			<Tab>
				<NavLink exact to="/">
					<IoIosHome className="react-icons"/>
					<span>Home</span>
				</NavLink>
				<NavLink to="/courses">
					<IoIosCopy className="react-icons"/>
					<span> Courses</span>
				</NavLink>
				<NavLink to="/agenda">
					<IoIosToday className="react-icons"/>
					<span> Agenda</span>
				</NavLink>
				<NavLink to="/settings">
					<IoIosCog className="react-icons"/>
					<span>Settings</span>
				</NavLink>
			</Tab>
		);
	}
}
