import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Header from '../components/Header';
import Content from '../components/Content/Content';
import Title from '../components/Title';
import TabBar from '../components/Tabs';

import Card from '../components/Card';
import Accordion, {AccordionWrapper} from '../components/Accordion';
import { Redirect } from 'react-router';
class Course extends Component {
	state = {
		title: 'Cursus Detail',
		courseTitle: 'Titel',
		tag: 'tag',
		content: 'short description',
		course: {},
		size: {},
	};
	props = {
		progress: 'IN PROGRESS',
		next: 'NEXT',
	};
	componentDidMount() {
		const { courses, params } = this.props;
		if (courses && courses.length > 0) {
			const course = courses.find((course) => course.id == params.id);
			return this.setState({ course });
		}
	}
	componentDidUpdate() {
		console.log(this.state.size);
		const { pending } = this.props;
		if (pending === false) return false;
		return true;
	}
	render() {
		const { history } = this.props;
		const { course, size } = this.state;
		const { progress, next } = this.props;
		 const isActive = true;
		console.log(size);
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
											<AccordionWrapper>
												<Accordion
													active={isActive}
													tag={`${'IN PROGRESS'}`}
													label={'Hoofdstuk afronden'}
													content={
														'Beschrijving van dit hoofdstuk enzo'
													}
												/>
												<Accordion tag={`${'NEXT'}`} />
												<Accordion tag={`${'NEXT'}`} />
												<Accordion tag={`${'NEXT'}`} />
												<Accordion tag={`${'NEXT'}`} />
												<Accordion tag={`${'NEXT'}`} />
												<Accordion tag={`${'NEXT'}`} />
												<Accordion tag={`${'NEXT'}`} />
												<Accordion tag={`${'NEXT'}`} />
												<Accordion tag={`${'NEXT'}`} />
												<Accordion tag={`${'NEXT'}`} />
												<Accordion tag={`${'NEXT'}`} />
											</AccordionWrapper>
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
		courses: state.courses.courses,
	};
};

export default connect(mapStateToProps)(Course);
