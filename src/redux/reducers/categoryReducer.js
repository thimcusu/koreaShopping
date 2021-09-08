import {
  LOAD_CATEGORY_SUCCESS,
  CREATE_CATEGORY_SUCCESS,
  UPDATE_CATEGORY_SUCCESS,
  DELETE_CATEGORY_OPTIMISTIC,
} from '../../constants/actionType';
import initialState, { statusState } from './initialState';

export default function categoryReducer(
  state = initialState.categories,
  action
) {
  switch (action.type) {
    case LOAD_CATEGORY_SUCCESS:
      return action.payload;
    case CREATE_CATEGORY_SUCCESS:
      return [{ ...action.payload, productsCount: 0 }, ...state];
    case UPDATE_CATEGORY_SUCCESS: {
      const newCat = state.map(cat => {
        if (cat._id === action.payload._id)
          return { ...action.payload, productsCount: cat.productsCount };
        return cat;
      });
      return newCat;
    }
    case DELETE_CATEGORY_OPTIMISTIC: {
      return state.filter(cat => cat._id !== action.payload);
    }
    default:
      return state;
  }
}
