import {
  LOAD_PRODUCT_SUCCESS,
  CREATE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_OPTIMISTIC,
  UPDATE_PRODUCT_SUCCESS,
} from '../../constants/actionType';
import initialState from './initialState';

export default function productReducer(state = initialState.products, action) {
  switch (action.type) {
    case LOAD_PRODUCT_SUCCESS:
      return action.payload;
    case CREATE_PRODUCT_SUCCESS:
      return [...state, { ...action.payload }];
    case UPDATE_PRODUCT_SUCCESS: {
      const newProducts = state.map(product => {
        if (product._id === action.payload._id) return action.payload;
        return product;
      });
      return newProducts;
    }
    case DELETE_PRODUCT_OPTIMISTIC: {
      return state.filter(product => product._id !== action.payload._id);
    }
    default:
      return state;
  }
}
