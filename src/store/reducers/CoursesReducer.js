const data = require('../../data.json');
const initialState = {
	pending: true,
	courses: data.courses,
	error: null,
	course: null
};

export const CoursesReducer = (state = initialState, action) => {
	switch (action.type) {
	case 'COURSES::FETCH_PENDING':
		return {
			...state,
			pending: true,
			error: null,
		};
	case 'COURSES::FETCH_SUCCESS':
		return {
			...state,
			pending: false,
			courses: action.courses,
		};
	case 'COURSES::FETCH_ERROR':
		return {
			...state,
			pending: true,
			error: action.error,
		};
	case 'COURSE::SELECTED':
		return {
			...state,
			pending: false,
			course: action.payload,
		};
	default:
		return state;
	}
};
