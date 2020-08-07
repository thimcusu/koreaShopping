export async function handleResponse(response) {
  return response.data;
}

// In a real app, would likely call an error logging service.
export function handleError(error) {
  // eslint-disable-next-line no-console
  console.error("API call failed. " + error);
  throw error;
}

export function getCourseBySlug(courses = [], slug = "") {
  const newCourse = {
    id: undefined,
    title: "",
    authorId: undefined,
    slug: "",
    category: "",
  };
  if (!slug) newCourse;
  return courses.find(course => course.slug === slug) || newCourse;
}
export function validateCourse(course) {
  const { title, authorId, category } = course;
  const errors = {};
  if (!title) errors.title = "Title is required....";
  if (!authorId) errors.author = "Author is required";
  if (!category) errors.category = "Category is required";
  return errors;
  //Object.keys(errors).length === 0;
}
