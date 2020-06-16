import data from '../../../data.json';

function fetchCoursesSuccess(courses) {
	return {
		type: 'COURSES::FETCH_SUCCESS',
		courses: courses,
	};
}

function fetchCoursesPending(value) {
	return {
		type: 'COURSES::FETCH_PENDING',
		pending: value,
	};
}

function fetchCoursesError(error) {
	return {
		type: 'COURSES::FETCH_ERROR',
		error: error,
		courses: [],
	};
}
let myInit = {
	method: 'GET',
	headers: {
		'Content-Type': 'applications/json',
	},
	mode: 'cors',
	cache: 'default',
};

let reqData = new Request(data, myInit);

export const fetchCourses = () => (dispatch) => {
	dispatch(fetchCoursesPending());
	fetch(reqData)
		.then((res) => res.json())
		.then((res) => {
			if (res.error) {
				dispatch(fetchCoursesSuccess(false));
				dispatch(fetchCoursesError(true));
			}
			dispatch(fetchCoursesError(false));
			dispatch(fetchCoursesSuccess(data.courses));
			return data.courses;
		});

	// FAKE WACHTTIJD VOOR Courses
	setTimeout(() => {
		dispatch(fetchCoursesSuccess(data.courses));
	});
};
