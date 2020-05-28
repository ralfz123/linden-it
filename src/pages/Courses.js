import React, { Component } from 'react'
import Title from '../components/Title/Title'
import Header from '../components/Header/Header'
import Content from '../components/Content/Content'

export default class Courses extends Component {
	render() {
		return (
			<>
				<Header>
					<Title name={`Courses`} />
				</Header>
				<Content>
					<p>Course Page Content</p>
				</Content>
			</>
		)
	}
}
