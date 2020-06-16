
export default function CourseSelectReducer(state = null, action) {
	switch(action.type) {
	case 'COURSE::SELECTED':
		return action.payload;
		break;
	}
	return state;
}