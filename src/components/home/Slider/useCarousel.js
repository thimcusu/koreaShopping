import { useReducer, useEffect, useCallback } from "react";
import PropTypes from "prop-types";

import {
  initialState,
  carouselReducer,
} from "../../../redux/reducers/carouselReducer";
import { isTouchEvent } from "../../../utils/checkEventType";
import { interval, delayTime } from "../../../utils/slide";

function useCarousel({ length, ref }) {
  const [state, dispatch] = useReducer(carouselReducer, initialState);
  const transform = -(100 / (length + 2)) * (state.active + 1);
  const isCloned = state.active === -1 || state.active === length;
  let style = {
    transform: `translateX(${transform}%)`,
    width: `${100 * (length + 2)}%`,
  };
  useEffect(() => {
    if (state.reseted === 1) {
      ref.current.removeEventListener("transitionend", handleReset);
      ref.current.classList.remove("cloned");
    }
  }, [state.reseted]);

  useEffect(() => {
    if (isCloned) {
      ref.current && ref.current.addEventListener("transitionend", handleReset);
      return;
    }
    const id = setTimeout(() => dispatch({ type: "next" }), interval);
    return () => clearTimeout(id);
  }, [state.active]);

  const handleReset = useCallback(() => {
    ref.current.classList.add("cloned");
    dispatch({ type: "reset", length });
  }, []);

  useEffect(() => {
    ref.current.classList.remove("cloned");
    const id = setTimeout(() => dispatch({ type: "done" }), delayTime);
    return () => clearTimeout(id);
  }, [state.desired]);

  const handleStart = event => {
    if (isTouchEvent(event.type)) event = event.touches[0];
    else event.preventDefault();
    if (isCloned) return;
    dispatch({ type: "drag", offset: event.clientX });
    ref.current.classList.add("drag");
  };
  const handleMove = event => {
    if (state.offset === 0 || isCloned) return;
    if (isTouchEvent(event.type)) event = event.touches[0];
    else event.preventDefault();
    const offset = event.clientX - state.offset;
    ref.current.style.transform = `translateX(calc(${transform}% + ${offset}px))`;
  };

  const handleEnd = event => {
    if (isTouchEvent(event.type)) event = event.touches[0];
    else event.preventDefault();
    if (state.offset === 0 || isCloned) return;
    ref.current.classList.remove("drag");
    const delta = event.clientX - state.offset;
    if (delta > 20) {
      dispatch({ type: "prev", length });
      return;
    }
    if (delta < -20) {
      dispatch({ type: "next", length });
      return;
    }
    ref.current.style.transform = `translateX(calc(${transform}% - ${delta}px))`;
    dispatch({ type: "stay" });
  };
  return [
    state.active,
    state.reseted,
    n => dispatch({ type: "jump", desired: n }),
    handleStart,
    handleMove,
    handleEnd,
    style,
  ];
}

useCarousel.propTypes = {
  length: PropTypes.number.isRequired,
  ref: PropTypes.element,
};

export default useCarousel;
