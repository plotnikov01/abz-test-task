import { apiClient } from './apiClient';

export const getToken = () => {
  return apiClient.get('/token');
};

export const getUsersList = (count) => {
  return apiClient.get(`/users?page=1&count=${count}`);
};

export const postUser = (userData, token) => {
  return apiClient.post('/users', userData, token);
};

export const getPositionsList = () => {
  return apiClient.get('/positions');
};
