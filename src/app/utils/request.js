import axios from 'axios';
import { API_URL } from '../../config';

const axiosApi = axios.create({
  baseURL: API_URL,
  timeout: 1000,
  // ...defaultOptions
}); 
export const setupAxios = (store) => {
  const reduxstate = store.getState();
  const { authToken } = reduxstate.auth;
  const AUTH_TOKEN = "Bearer " + authToken;
  if(Boolean(authToken)) {
    axiosApi.defaults.headers.common['Authorization'] = AUTH_TOKEN;
  }
}

export default axiosApi;