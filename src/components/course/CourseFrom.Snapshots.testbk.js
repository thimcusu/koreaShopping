import React from "react";
import CourseFrom from "./CourseForm";
import renderer from "react-test-renderer";
import { courses, authors } from "../../../backend/mockData";

it("sets submit button label 'Saving...' when saving is true", () => {
  const tree = renderer.create(
    <CourseFrom
      course={courses[0]}
      authors={authors}
      onSave={jest.fn()}
      onChange={jest.fn()}
      isLoading
    />
  );
  expect(tree).toMatchSnapshot();
});
