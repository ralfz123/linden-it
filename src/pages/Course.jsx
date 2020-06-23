import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Header from '../components/Header';
import Content from '../components/Content/Content';
import TabBar from '../components/Tabs';
import Drawer from 'react-drag-drawer';
// import { StyledDrawer } from '../components/BottomDrawer';
import Goals from '../components/SettingGoals/index';
import Card from '../components/Card';
import Accordion from '../components/Accordion';
import { Redirect } from 'react-router';
class Course extends Component {
	state = {
		title: 'Cursus Detail',
		courseTitle: 'Titel',
		tag: 'tag',
		content: 'short description',
		course: {},
		size: {},
		settingGoals: true,
	};
	componentDidMount() {
		const { courses, params } = this.props;

		if (courses && courses.length > 0) {
			const course = courses.find((course) => course.id == params.id); // params is the same id as course id. it will render the right course if the param changes.
			return this.setState({ course });
		}
	}
	componentDidUpdate() {
		const { pending } = this.props;
		if (pending === false) return false;
		return true;
	}
	CloseDrawer = () => {
		let { settingGoals } = this.state;

		this.setState({ settingGoals: false });// if set to true the settingGoals component will be opened (only opens when course.tag === "NEW".)
	};
	render() {
		const { history } = this.props;
		const { course, size, settingGoals } = this.state;
		if (!course) {// if there is no course youll be redirected to the courses page
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
					<Header
						title={course.title}
						getSize={(size) => this.setState({ size })}
						history={history}
					/>

					<Content>
						<TabBar
							setPadding={size}
							tabs={[
								{
									title: 'LEERSTOF',
									render: () => (
										<>
											<Accordion
												chapters={course.chapters}
												currentChapter={course}
											/>
										</>
									),
								},
								{
									title: 'NOTITIES',
									render: () => (
										<>
											<Card
												contentTitle={
													'Titel van de notitie'
												}
												content={
													'Hier komt de eerste alinea/tekst die geschreven is in deze notitie. Hier komt de eerste alinea/tekst die geschreven is in deze notitie. '
												}
											/>
										</>
									),
								},
								{
									title: 'FORUM',
									render: () => (
										<>
											<div>Content Forum must be placed here</div>
										</>
									),
								},
							]}
						/>
					</Content>
					{course.tag === 'NEW' && (
						<Drawer
							allowClose={false}
							open={settingGoals}
							modalElementClass={`bottom-drawer`}
							onRequestClose={this.CloseDrawer}
							dontApplyListeners={false}
						>
							<Goals onRequestClose={this.CloseDrawer} />
						</Drawer>
					)}
				</>
			);
		}
	}
}

Course.propTypes = {
	course: PropTypes.object,
	courses: PropTypes.array,
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
		courses: state.courses.courses,
	};
};

export default connect(mapStateToProps)(Course);
