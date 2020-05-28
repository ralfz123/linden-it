import React from 'react'
import styled from 'styled-components'

const Header = styled.header`
	left: 0;
	right: 0;
	top: 0;
	display: flex;
	justify-content: space-between;
	min-height: 60px;
	width: 100vw;
	background-color: var(--color-primary);
	color: var(--color-light);
`

const Toolbar = (props) => {
	return (
		<Header>
			<h1>{props.title}</h1>
		</Header>
	)
}

export default Toolbar
