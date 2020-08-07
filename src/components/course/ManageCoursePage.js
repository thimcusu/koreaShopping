/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import slug from "slug";

import { createCourse, updateCourse } from "../../redux/actions/coursesAction";
import useFetchAuthors from "../../api/useFetchAuthors";
import useFetchCourses from "../.././api/useFetchCourses";
import { getCourseBySlug, validateCourse } from "../../api/apiUtil";
import Spinner from "../common/Spinner";
import CourseForm from "./CourseForm";

function ManageCoursePage({ match, history }) {
  const dispatch = useDispatch();
  const { courses } = useFetchCourses();
  const { authors } = useFetchAuthors();

  const [course, setCourse] = useState({});
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const initialCourse = getCourseBySlug(courses, match.params.slug);
    setCourse(initialCourse);
  }, [courses]);

  function handleChange(event) {
    const { name, value } = event.target;
    setCourse(prevCourse => ({
      ...prevCourse,
      slug: name === "title" ? slug(value) : prevCourse.slug,
      [name]: name === "authorId" ? parseInt(value, 10) : value,
    }));
  }

  function formIsValid() {
    setErrors(validateCourse(course));
    const keys = Object.keys(validateCourse(course)).length;
    return keys === 0;
  }

  async function handleSave(event) {
    event.preventDefault();
    if (!formIsValid()) return;
    setIsLoading(true);
    if (course.id) {
      try {
        await dispatch(updateCourse(course));
        setIsLoading(false);
        toast.success("Update course success");
      } catch (err) {
        toast.error("Update course fail!" + err.message, {
          autoClose: false,
        });
      }
    } else {
      try {
        await dispatch(createCourse(course));
        setIsLoading(false);
        toast.success("Create course success");
      } catch (err) {
        toast.error("Create course fail!" + err.message, {
          autoClose: false,
        });
      }
    }
    history.push("/courses");
  }
  return !authors ||
    !courses ||
    authors.length === 0 ||
    courses.length === 0 ? (
    <Spinner className="container" />
  ) : (
    <CourseForm
      course={course}
      errors={errors}
      authors={authors}
      onChange={handleChange}
      onSave={handleSave}
      isLoading={isLoading}
    />
  );
}

export default ManageCoursePage;
