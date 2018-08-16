import courseApi from '../api/mockCourseApi';
import {
  LOAD_COURSES_SUCCESS
} from '../constants/ActionTypes';

export function loadCoursesSuccess(courses) {
  return {
    type: LOAD_COURSES_SUCCESS,
    courses
  };
}

export function loadCourses() {
  return function (dispatch) {
    return courseApi.getAllCourses().then(
      (courses) => {
        dispatch(loadCoursesSuccess(courses));
      }
    ).catch(
      (error) => {
        throw(error);
      }
    )
  }
}
