import * as types from "../actions/actionTypes";

export default function courseReducer(state = [], action) {
  switch (action.type) {
    case types.CREATE_COURSE_SUCCESS: {
      return [...state, { ...action.payload }];
    }
    case types.UPDATE_COURSE_SUCCESS: {
      const newCourses = state.map(course => {
        if (course._id === action.payload._id) return action.payload;
        return course;
      });
      return newCourses;
    }
    case types.LOAD_COURSES_SUCCESS:
      return action.payload;
    case types.DELETE_COURSE_OPTIMISTIC: {
      return state.filter(course => course._id !== action.payload._id);
    }
    default:
      return state;
  }
}
