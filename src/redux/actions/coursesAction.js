import {
  LOAD_COURSES_SUCCESS,
  API_CALL_ERROR,
  CREATE_COURSE_SUCCESS,
  UPDATE_COURSE_SUCCESS,
  DELETE_COURSE_OPTIMISTIC,
} from "./actionTypes";
import {
  getCourses,
  postCourse,
  putCourse,
  deleteCourse,
} from "../../api/courseApi";
import { beginApiCall, apiCallError } from "./apiStatusAction";

export function loadCourses() {
  return function (dispatch) {
    dispatch(beginApiCall());
    return getCourses()
      .then(courses => {
        dispatch({ type: LOAD_COURSES_SUCCESS, payload: courses });
      })
      .catch(err => {
        dispatch({ type: API_CALL_ERROR, payload: err });
      });
  };
}

export function createCourse(course) {
  return function (dispatch) {
    dispatch(beginApiCall());
    return postCourse(course)
      .then(course => {
        dispatch({ type: CREATE_COURSE_SUCCESS, payload: course });
      })
      .catch(err => {
        dispatch(apiCallError(err));
      });
  };
}

export function removeCourse(course) {
  return function (dispatch) {
    dispatch({ type: DELETE_COURSE_OPTIMISTIC, payload: course });
    return deleteCourse(course._id);
  };
}

export function updateCourse(course) {
  return function (dispatch) {
    dispatch(beginApiCall());
    return putCourse(course)
      .then(course => {
        dispatch({ type: UPDATE_COURSE_SUCCESS, payload: course });
      })
      .catch(err => {
        dispatch(apiCallError(err));
      });
  };
}
