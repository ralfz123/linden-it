export const selectCourse = (course) => {
	console.log('selected' + course.id);
	return {
		type: 'COURSE::SELECTED',
		payload: course
	};
};
