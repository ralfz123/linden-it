import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Header from '../components/Header';
import Content from '../components/Content/Content';
import Title from '../components/Title';
import TabBar from '../components/Tabs';

import Card from '../components/Card';
import { Redirect } from 'react-router';
class Course extends Component {
	state = {
		title: 'Cursus Detail',
		courseTitle: 'Titel',
		tag: 'tag',
		content: 'short description',
		course: {}
		
	};
	componentDidMount() {
		const { courses, params } = this.props;
		if (courses && courses.length > 0) {
			const course = courses.find((course) => course.id == params.id);
			return this.setState({ course });
		}

	}
	componentDidUpdate() {
		const { pending } = this.props;
		if (pending === false) return false;
		return true;
	}
	render() {
		const { history } = this.props;
		const { course } = this.state;
			
		if (!course) {
			return (
				<Redirect
					to={{
						pathname: '/courses',
						
					}}
				/>
			);
		} else {
	
	
			return (
				<>
					<Header history={history}>
						<Title title={course.title} />
					</Header>
					<Content>
						<TabBar
							tabs={[
								{
									title: 'NOTITIES',
									render: () => (
										<>
											<Card
												contentTitle={'Titel van de notitie'}
												content={'Hier komt de eerste alinea/tekst die geschreven is in deze notitie. Hier komt de eerste alinea/tekst die geschreven is in deze notitie. '}
											/>
										</>
									),
								},
								{
									title: 'LEERSTOF',
									render: () => (
										<>
											<div>doei</div>
										</>
									),
								},
								{
									title: 'FORUM',
									render: () => (
										<>
											<div>hallo</div>
										</>
									),
								},
							]}
						/>
					</Content>
				</>
			);
		}
	}
}

Course.propTypes = {
	course: PropTypes.object,
	courses: PropTypes.shape({
		find: PropTypes.func,
		length: PropTypes.number,
	}),
	history: PropTypes.any,
	match: PropTypes.any,
	params: PropTypes.shape({
		id: PropTypes.any,
	}),
	path: PropTypes.any,
	pending: PropTypes.bool,
};

const mapStateToProps = (state) => {

	return {
		courses: state.courses.courses
	};
};

export default connect(mapStateToProps)(Course);
