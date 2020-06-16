import data from '../../data.json';
const initialState = {
	pending: false,
	courses: data.courses,
	error: null,
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
	default:
		return state;
	}
};
