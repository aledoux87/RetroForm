import { SET_USER, RESET_USER } from './constants';

export const initialState = {
  login: '',
  email: '',
  passwordStrong: 0,
  firstName: '',
  lastName: '',
  birthYear: 0,
  gender: ''
};

export default function user(state = initialState, action = {}) {
  const { type, payload } = action;

  switch (type) {
    case SET_USER:
      return {
        ...state,
        ...payload
      };

    case RESET_USER:
      return initialState;

    default:
      return state;
  }
}
