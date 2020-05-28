import React, { Component } from 'react'
import styled from 'styled-components'

const StyledMain = styled.main`
	position: -webkit-sticky;
`
export default class Content extends Component {
	render() {
		return <StyledMain>{this.props.children}</StyledMain>
	}
}