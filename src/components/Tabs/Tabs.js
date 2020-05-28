import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

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
		text-align: center;
		justify-content: center;
		align-items: center;
		color: var(--color-gray);
		text-decoration: none;
		padding: 3px 0;
		font-size: 12px;

		&.active {
			color: var(--color-primary);
		}
		ion-icon {
			font-size: 24px;
		}
	}
`

export default class Tabs extends React.Component {
	render() {
		return (
			<Tab>
				<NavLink exact to='/'>
					<ion-icon name='home'></ion-icon>
					<span>Home</span>
				</NavLink>
				<NavLink to='/courses'>
					<ion-icon name='reader'></ion-icon>
					<span> Courses</span>
				</NavLink>
				<NavLink to='/agenda'>
					<ion-icon name='today'></ion-icon>
					<span> Agenda</span>
				</NavLink>
				<NavLink to='/settings'>
					<ion-icon name='cog'></ion-icon>
					<span>Settings</span>
				</NavLink>
			</Tab>
		)
	}
}
