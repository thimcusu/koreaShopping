import {
  LOAD_PRODUCT_SUCCESS,
  CREATE_PRODUCT_SUCCESS,
} from '../../constants/actionType';
import { beginApiCall, apiCallError } from './apiStatusAction';
import { getProducts, createProduct } from '../../api/productApi';

export function loadProducts() {
  return function (dispatch) {
    dispatch(beginApiCall());
    return getProducts()
      .then(data => {
        dispatch({ type: LOAD_PRODUCT_SUCCESS, payload: data.data });
      })
      .catch(err => {
        dispatch(apiCallError(err));
      });
  };
}

export function postProduct(product) {
  return function (dispatch) {
    dispatch(beginApiCall());
    return createProduct(product)
      .then(data => {
        dispatch({ type: CREATE_PRODUCT_SUCCESS, payload: data.data });
      })
      .catch(err => {
        dispatch(apiCallError(err));
      });
  };
}
