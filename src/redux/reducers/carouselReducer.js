export const initialState = {
  offset: 0,
  desired: 0,
  active: 0,
};
const previous = (length, current) => (current - 1 + length) % length;

const next = (length, current) => (current + 1) % length;

export const carouselReducer = (state = initialState, action) => {
  switch (action.type) {
    case "next":
      return {
        ...state,
        desired: next(action.length, state.active),
        offset: 0,
      };
    case "jump":
      return { ...state, desired: action.desired, offset: 0 };
    case "prev":
      return {
        ...state,
        desired: previous(action.length, state.active),
        offset: 0,
      };
    case "stay":
      return {
        ...state,
        offset: 0,
      };
    case "done":
      return {
        ...state,
        offset: 0,
        active: state.desired,
      };
    case "drag":
      return { ...state, offset: action.offset };
    default:
      return state;
  }
};
