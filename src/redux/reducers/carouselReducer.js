export const initialState = {
  offset: 0,
  desired: 0,
  active: 0,
  reseted: 0,
};

export const carouselReducer = (state = initialState, action) => {
  switch (action.type) {
    case "next":
      return {
        ...state,
        desired: state.active + 1,
        offset: 0,
        reseted: 0,
      };
    case "jump":
      return { ...state, desired: action.desired, offset: 0, reseted: 0 };
    case "prev":
      return {
        ...state,
        desired: state.active - 1,
        offset: 0,
        reseted: 0,
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
    case "reset":
      return {
        ...state,
        active:
          state.active === -1
            ? action.length - 1
            : state.active === action.length
            ? 0
            : state.active,
        reseted: 1,
      };
    case "drag":
      return { ...state, offset: action.offset, reseted: 0 };
    default:
      return state;
  }
};
