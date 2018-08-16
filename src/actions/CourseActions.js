import {
  CREATE_COURSE
} from '../constants/ActionTypes';

export function createCourse(course) {
  return {
    type: CREATE_COURSE,
    course
  };
}
