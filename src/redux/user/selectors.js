import { initialState } from './reducer';

export const getUser = state => state.user || initialState;
