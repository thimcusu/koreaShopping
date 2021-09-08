import {
  LOAD_CATEGORY_SUCCESS,
  CREATE_CATEGORY_SUCCESS,
  DELETE_CATEGORY_OPTIMISTIC,
  UPDATE_CATEGORY_SUCCESS,
} from '../../constants/actionType';
import { beginApiCall, apiCallError } from './apiStatusAction';
import {
  getCategories,
  createCategory,
  deleteCategory,
  putCategory,
} from '../../api/categoryApi';

export function loadCategories() {
  return function (dispatch) {
    dispatch(beginApiCall());
    return getCategories()
      .then(data => {
        dispatch({ type: LOAD_CATEGORY_SUCCESS, payload: data.data });
      })
      .catch(err => {
        dispatch(apiCallError(err));
      });
  };
}

export function postCategory(cat) {
  return function (dispatch) {
    dispatch(beginApiCall());
    return createCategory(cat)
      .then(data => {
        dispatch({ type: CREATE_CATEGORY_SUCCESS, payload: data.data });
        return data;
      })
      .catch(err => {
        dispatch(apiCallError(err));
      });
  };
}

export function updateCategory(cat) {
  return function (dispatch) {
    dispatch(beginApiCall());
    return putCategory(cat)
      .then(data => {
        dispatch({ type: UPDATE_CATEGORY_SUCCESS, payload: data.data });
        return data;
      })
      .catch(err => {
        dispatch(apiCallError(err));
        throw err;
      });
  };
}

export function deleteCategoryById(id) {
  return function (dispatch) {
    dispatch({ type: DELETE_CATEGORY_OPTIMISTIC, payload: id });
    return deleteCategory(id);
  };
}
