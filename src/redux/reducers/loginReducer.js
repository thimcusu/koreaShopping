import { LOGIN_SUCCESS, KEEP_SIGNED_SUCCESS } from "../../constants/actionType";
import initialState from './initialState';

export default function loginReducer(state = initialState.currentUser, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { ...state, token: action.payload };
    case KEEP_SIGNED_SUCCESS:
      return { ...state, data: action.payload };
    default:
      return state;
  }
}