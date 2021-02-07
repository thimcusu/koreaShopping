import {
  TOGGLE_SIDEBAR,
  TOGGLE_TOPBAR_MOBILE,
  TOGGLE_MENU_MOBILE,
} from '../../constants/actionType';

export function toggleSideBar(accepted = true) {
  return { type: TOGGLE_SIDEBAR, payload: accepted };
}
export function toggleTopbar(accepted = true) {
  return { type: TOGGLE_TOPBAR_MOBILE, payload: accepted };
}
export function toggleMenu(accepted = true) {
  return { type: TOGGLE_MENU_MOBILE, payload: accepted };
}
