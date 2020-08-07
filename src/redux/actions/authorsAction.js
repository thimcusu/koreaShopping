import * as types from "./actionTypes";
import { getAuthors } from "../../api/authorApi";
import { beginApiCall, apiCallError } from "./apiStatusAction";

export const loadAuthors = () => {
  return function (dispatch) {
    dispatch(beginApiCall());
    return getAuthors()
      .then(authors => {
        dispatch({ type: types.LOAD_AUTHORS_SUCCESS, payload: authors });
      })
      .catch(err => {
        dispatch(apiCallError(err));
      });
  };
};

export default {
  loadAuthors,
};
