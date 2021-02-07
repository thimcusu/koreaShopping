import {
  TOGGLE_SIDEBAR,
  TOGGLE_TOPBAR_MOBILE,
  TOGGLE_MENU_MOBILE,
} from '../../constants/actionType';
import { DEVICE_FIXED_SIZE } from '../../constants/deviceSizes';

const initialState = window.innerWidth >= DEVICE_FIXED_SIZE.laptop;

export function toggledSidebar(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      if (!action.payload) return state;
      return !state;
    default:
      return state;
  }
}

export function toggledTopbar(state = false, action) {
  switch (action.type) {
    case TOGGLE_TOPBAR_MOBILE:
      if (!action.payload) return state;
      return !state;
    default:
      return state;
  }
}

export function toggledMenu(state = false, action) {
  switch (action.type) {
    case TOGGLE_MENU_MOBILE:
      if (!action.payload) return state;
      return !state;
    default:
      return state;
  }
}
