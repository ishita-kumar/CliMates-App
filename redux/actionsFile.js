import { SIGN_IN, SIGN_OUT } from './actionsTypes';
export const logIn = (userData) => ({
  type: SIGN_IN,
  payload: userData,
});
export const logOut = () => ({
  type: SIGN_OUT,
});
