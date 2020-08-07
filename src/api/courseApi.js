import { api } from "./axiosService";
import { handleResponse, handleError } from "./apiUtil";

export const getCourses = () => {
  return api({
    url: "/courses",
    method: "GET",
  })
    .then(handleResponse)
    .catch(handleError);
};

export const putCourse = course => {
  const { id, ...data } = course;
  return api({
    url: `/courses/${id}`,
    method: "PUT",
    data,
  })
    .then(handleResponse)
    .catch(handleError);
};

export const postCourse = course => {
  return api({
    url: "/courses",
    method: "POST",
    data: course,
  })
    .then(handleResponse)
    .catch(handleError);
};

export const deleteCourse = courseId => {
  return api({
    url: `/courses/${courseId}`,
    method: "DELETE",
  })
    .then(handleResponse)
    .catch(handleError);
};
