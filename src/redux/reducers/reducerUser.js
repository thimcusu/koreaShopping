import {CREATE_USER_SUCCESS, DELETE_USER_OPTIMISTIC, KEEP_SIGNED_SUCCESS, LOAD_USERS_SUCCESS, LOGIN_SUCCESS, LOGOUT, UPDATE_USER_SUCCESS}  from "../../constants/actionType";

export default function userReducer(state = [], action) {
  switch (action.type) {
    case CREATE_USER_SUCCESS: {
      return [...state, { ...action.payload }];
    }
    case UPDATE_USER_SUCCESS: {
      const newUser = state.map(user => {
        if (user._id === action.payload._id) return action.payload;
        return user;
      });
      return newUser;
    }
    case LOAD_USERS_SUCCESS:
      return action.payload;
    case DELETE_USER_OPTIMISTIC: {
      return state.filter(user => user._id !== action.payload._id);
    }
    default:
      return state;
  }
}
