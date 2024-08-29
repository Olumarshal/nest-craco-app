import axios from 'axios';
import appConfig from '../configs/app.config';

const BaseService = axios.create({
  baseURL: appConfig.apiPrefix,
  timeout: 50000,
  headers: {
    'Content-Type': 'application/json',
  },
});

BaseService.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default BaseService;
