import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import selectCourse from '../store/reducers/actions/CourseSelectAction';

import Header from '../components/Header';
import Content from '../components/Content/Content';
import Title from '../components/Title';
import TabBar from '../components/Tabs';
import { Spinner } from '../components/Spinner';
import Card from '../components/Card';
import { Redirect } from 'react-router';
class Course extends Component {
	state = {
		title: 'Cursus Detail',
		courseTitle: 'Titel',
		tag: 'tag',
		content: 'short description',
		course: {},
		
	};
	componentDidMount() {
		
		
	}
	componentDidUpdate(prevProps, prevState) {
		const { pending } = this.props;
		if (pending === false) return false;
		// more tests
		return true;
	}
	render() {
		
		const { course, params, path, match, pending } = this.props;
		
		console.log(this.state);
		console.log(this.props);
		
		if (!course) {
			return (
				<Redirect
					to={{
						pathname: '/login',
						
					}}
				/>
			);
		} else {
	
	
			return (
				<>
					<Header>
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
												contentTitle={`Titel van de notitie`}
												content={`Hier komt de eerste alinea/tekst die geschreven is in deze notitie. Hier komt de eerste alinea/tekst die geschreven is in deze notitie. `}
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
	course: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
	return {
		course: state.activeCourse,
	};
};

export default connect(mapStateToProps)(Course);
