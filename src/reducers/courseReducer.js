import {
  LOAD_COURSES_SUCCESS
} from '../constants/ActionTypes';

export default function courseReducer(state = [], action) {
  switch(action.type){
    case LOAD_COURSES_SUCCESS:
      return action.courses;

    default:
      return state;
  }
}
