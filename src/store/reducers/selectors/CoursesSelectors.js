
/**
 * Returns the courses
 * @param  {any} state
 * @return
 */
export const getCourses = state => state.courses.courses;

/**
 * Returns the pending state for courses
 * @param  {any} state
 * @return
 */
export const getCoursesPending = state => state.courses.pending;

/**
 * Returns the error state for courses
 * @param  {any} state
 * @return
 */
export const getCoursesError = state => state.courses.error;

