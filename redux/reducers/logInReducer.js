import { SIGN_IN, SIGN_OUT } from '../actionsTypes';
const initialState = {
  email: '',
  firstName: '',
  password: '',
  surname: '',
  image: null,
  userName: '',
  loggedIn: false,
  carbonFootPrintSaved: 400,
  energySaved: 0,
};
const loggedReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SIGN_IN:
      return { ...state, ...payload, loggedIn: true };
    case SIGN_OUT:
      return { ...initialState };
    default:
      return { ...state };
  }
};
export default loggedReducer;
