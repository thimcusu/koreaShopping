import { combineReducers } from 'redux';
import users from './reducerUser';
import apiCallStatus from './reducerApiStatus';
import currentUser from './loginReducer';
import { toggledSidebar, toggledTopbar, toggledMenu } from './utilsReducer';
import { LOGOUT } from '../../constants/actionType';

const appReducer = combineReducers({
  users,
  apiCallStatus,
  currentUser,
  toggledSidebar,
  toggledTopbar,
  toggledMenu,
});

const rootReducer = (state, action) => {
  if (action.type === LOGOUT) state = undefined;
  return appReducer(state, action);
};

export default rootReducer;
