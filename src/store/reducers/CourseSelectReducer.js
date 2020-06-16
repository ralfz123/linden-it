
export default function CourseSelectReducer(state = {}, action) {
	switch(action.type) {
	case 'COURSE::SELECTED':
		return action.payload;
	default:
		return state ={};
	}
}