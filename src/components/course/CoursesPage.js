import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

import CourseList from "./CoursesList";
import Spinner from "../common/Spinner";
import useFetchCourses from "../../api/useFetchCourses";
import useFetchAuthors from "../../api/useFetchAuthors";
import { removeCourse } from "../../redux/actions/coursesAction";
import { StyleCoursesPage } from "./style/StyleCoursesPage";

function CoursesPage({ history }) {
  const dispatch = useDispatch();
  const { courses, apiCallStatus: courseStatus } = useFetchCourses();
  const { authors, apiCallStatus: authorStatus } = useFetchAuthors();
  const loading = courseStatus > 0 || authorStatus > 0;
  const error = courseStatus < 0 || authorStatus < 0;

  const handleToggleAddCourse = () => {
    history.push("/course");
  };

  const handleDeleteCourse = async course => {
    toast.success("Course deleted");
    try {
      await dispatch(removeCourse(course));
    } catch (error) {
      toast.error("Delete failed. " + error.message, { autoClose: false });
    }
  };

  return (
    <StyleCoursesPage className="container">
      <div className="row justify-content-center">
        <div className="d-inline-block">
          <h2>Add Course</h2>
        </div>
        <div className="d-inline-block">
          <button
            type="submit"
            onClick={handleToggleAddCourse}
            className="btn btn-primary"
          >
            Add
          </button>
        </div>
      </div>
      {loading ? (
        <Spinner className="container" />
      ) : (
        <CourseList
          courses={courses}
          authors={authors}
          onDeleteCourse={handleDeleteCourse}
        />
      )}
      {error && <div>Ops! Something is wrong</div>}
    </StyleCoursesPage>
  );
}
CoursesPage.propTypes = {
  history: PropTypes.object,
};

export default CoursesPage;
