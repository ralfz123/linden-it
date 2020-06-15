/* eslint-disable react/display-name */
import React from 'react';
import PropTypes from 'prop-types';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	useParams,
	useRouteMatch,
} from 'react-router-dom';
import TabBar from '../components/Tabs';

const CourseDetail = ({ course }) => {
	let { id } = useParams();
	return (
		<>
			<TabBar
				tabs={[
					{
						title: 'ALL',
						render: () => (
							<>
								<div>{id}</div>
							</>
						),
					},
					{
						title: 'NEW',
						render: () => (
							<>
								<div>doei</div>
							</>
						),
					},
					{
						title: 'IN PROGRESS',
						render: () => (
							<>
								<div>hallo</div>
							</>
						),
					},
				]}
			/>
		</>
	);
}

export default CourseDetail;
