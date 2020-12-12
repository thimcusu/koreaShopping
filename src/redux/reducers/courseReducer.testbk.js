import courseReducer from "./reducerCourse";
import * as actions from "../actions/coursesAction";
import * as types from "../actions/actionTypes";

it("should add course when passed CREATE_COURSE_SUCCESS", () => {
  // arrange
  const initialState = [
    {
      title: "A",
    },
    {
      title: "B",
    },
  ];

  const newCourse = {
    title: "C",
  };

  const action = { type: types.CREATE_COURSE_SUCCESS, payload: newCourse };

  // act
  const newState = courseReducer(initialState, action);

  // assert
  expect(newState.length).toEqual(3);
  expect(newState[0].title).toEqual("A");
  expect(newState[1].title).toEqual("B");
  expect(newState[2].title).toEqual("C");
});

it("should update course when passed UPDATE_COURSE_SUCCESS", () => {
  // arrange
  const initialState = [
    { id: 1, title: "A" },
    { id: 2, title: "B" },
    { id: 3, title: "C" },
  ];

  const course = { id: 2, title: "New Title" };
  const action = { type: types.UPDATE_COURSE_SUCCESS, payload: course };

  // act
  const newState = courseReducer(initialState, action);
  const updatedCourse = newState.find(a => a._id == course._id);
  const untouchedCourse = newState.find(a => a._id == 1);

  // assert
  expect(updatedCourse.title).toEqual("New Title");
  expect(untouchedCourse.title).toEqual("A");
  expect(newState.length).toEqual(3);
});
