import React, { useReducer, useEffect } from "react";
import {
  initialState,
  carouselReducer,
} from "../../../redux/reducers/carouselReducer";
import { isTouchEvent } from "../../../utils/checkEventType";

function useCarousel({ length, interval, transitionTime, ref }) {
  const [state, dispatch] = useReducer(carouselReducer, initialState);
  const transform = -(100 / (length + 2)) * (state.active + 1);
  let style = {
    transform: `translateX(${transform}%)`,
    width: `${100 * (length + 2)}%`,
  };

  useEffect(() => {
    const id = setTimeout(() => dispatch({ type: "next", length }), interval);
    return () => clearTimeout(id);
  }, [state.active]);

  useEffect(() => {
    const id = setTimeout(() => dispatch({ type: "done" }), transitionTime);
    return () => clearTimeout(id);
  }, [state.desired]);

  const elastic = `transform 100ms cubic-bezier(0.68, -0.55, 0.265, 1.55)`;
  const smooth = `transform ${transitionTime}ms ease`;

  const handleStart = event => {
    if (isTouchEvent(event.type)) event = event.touches[0];
    else event.preventDefault();
    dispatch({ type: "drag", offset: event.clientX });
    ref.current.classList.add("drag");
  };
  const handleMove = event => {
    if (state.offset === 0 || state.active !== state.desired) return;
    if (isTouchEvent(event.type)) event = event.touches[0];
    else event.preventDefault();
    const offset = event.clientX - state.offset;
    console.log(`translateX(calc(${transform}% + ${offset}))`);
    ref.current.style.transform = `translateX(calc(${transform}% + ${offset}px))`;
  };

  const handleEnd = event => {
    if (isTouchEvent(event.type)) event = event.touches[0];
    else event.preventDefault();
    ref.current.classList.remove("drag");
    const delta = event.clientX - state.offset;
    if (delta > 20) {
      dispatch({ type: "prev", length });
      return;
    }
    if (delta < -20) {
      if (state.active === length - 1) {
        ref.current.style.transform = `translateX(${
          -(100 / (length + 2)) * (state.active + 2)
        })`;
        console.log(111);
      }
      dispatch({ type: "next", length });
      return;
    }
    ref.current.style.transform = `translateX(calc(${transform}% - ${delta}px))`;
    dispatch({ type: "stay" });
  };
  return [
    state.active,
    n => dispatch({ type: "jump", desired: n }),
    handleStart,
    handleMove,
    handleEnd,
    style,
  ];
}

export default useCarousel;
