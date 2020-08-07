import { api } from "./axiosService";
import { handleResponse, handleError } from "./apiUtil";

export const getAuthors = () => {
  return api({
    url: "/authors",
    method: "GET",
  })
    .then(handleResponse)
    .catch(handleError);
};
