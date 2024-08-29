import { ILogin, ISignup } from '../interfaces';
import BaseService from './BaseService';

export const apiLogin = (data: ILogin) => {
  return BaseService.post(`/login`, data);
};

export const apiSignup = (data: ISignup) => {
  return BaseService.post(`/signup`, data);
};
