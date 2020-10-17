import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const CoursesList = ({ courses = [], authors = [], onDeleteCourse }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th />
          <th>Title</th>
          <th>Author</th>
          <th>Category</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {courses &&
          courses.map((course, index) => {
            const author = authors.find(a => a._id === course.authorId);
            return (
              <tr key={course._id}>
                <td>{index}</td>
                <td>
                  <a
                    className="btn btn-light"
                    href={`http://pluralsight.com/course/${course.slug}`}
                  >
                    Watch
                  </a>
                </td>
                <td>
                  <Link to={`/course/${course.slug}`}>{course.title}</Link>
                </td>
                <td>{author ? author.name : ""}</td>
                <td>{course.category}</td>
                <td>
                  <button
                    type="submit"
                    onClick={() => onDeleteCourse(course)}
                    className="btn btn-outline-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

CoursesList.propTypes = {
  courses: PropTypes.array.isRequired,
  authors: PropTypes.array.isRequired,
  onDeleteCourse: PropTypes.func.isRequired,
};

export default CoursesList;
