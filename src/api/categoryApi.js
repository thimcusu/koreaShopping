import { api } from './axiosService';
import { handleResponse, handleError } from './apiUtil';
import { getJwt } from '../utils/jwt';

export const getCategories = () => {
  const jwt = getJwt();
  return api({
    url: '/categories',
    method: 'GET',
    headers: { authorization: jwt },
  })
    .then(handleResponse)
    .catch(handleError);
};

export const createCategory = data => {
  return api({
    url: '/categories',
    method: 'POST',
    data,
  })
    .then(handleResponse)
    .catch(handleError);
};

export const putCategory = cat => {
  const { _id, ...data } = cat;
  return api({
    url: `/categories/${_id}`,
    method: 'PUT',
    data,
  })
    .then(handleResponse)
    .catch(handleError);
};

export const deleteCategory = catId => {
  return api({
    url: `/categories/${catId}`,
    method: 'DELETE',
  })
    .then(handleResponse)
    .catch(handleError);
};
