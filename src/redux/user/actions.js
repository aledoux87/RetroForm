import { SET_USER, RESET_USER } from './constants';

export const setUser = user => ({ type: SET_USER, payload: user });

export const resetUser = () => ({ type: RESET_USER });
