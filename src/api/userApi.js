import { api } from "./axiosService";
import { handleResponse, handleError } from "./apiUtil";
import { getJwt } from "../utils/jwt";

export const getUsers = () => {
  const jwt = getJwt();
  return api({
    url: "/users",
    method: "GET",
    headers: { authorization: jwt },
  })
    .then(handleResponse)
    .catch(handleError);
};

export const createUser = (data) => {
  return api({
    url: "/users",
    method: "POST",
    data,
  })
    .then(handleResponse)
    .catch(handleError);
};

export const putUser = user => {
  const { _id, ...data } = user;
  return api({
    url: `/users/${_id}`,
    method: "PUT",
    data,
  })
    .then(handleResponse)
    .catch(handleError);
};

export const deleteUser = userId => {
  return api({
    url: `/users/${userId}`,
    method: "DELETE",
  })
    .then(handleResponse)
    .catch(handleError);
};

export const registerUser = (data) => {
    return api({
      url: "/auth/resgister",
      method: "POST",
      data,
    })
      .then(handleResponse)
      .catch(handleError);
  };

export const loginUser = (data) => {
  return api({
    url: "/auth/login",
    method: "POST",
    data,
  })
    .then(handleResponse)
    .catch(handleError);
};

export const getLoginedUser = () => {
  const jwt = getJwt();
  return api({
    url: "/auth/me",
    method: "GET",
    headers: { authorization: jwt },
  })
    .then(handleResponse)
    .catch(handleError);
};