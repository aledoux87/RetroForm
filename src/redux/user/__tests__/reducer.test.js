import reducer from '../reducer';

describe('User: Reducer', () => {
  const initialState = {
    login: '',
    email: '',
    passwordStrong: 0,
    firstName: '',
    lastName: '',
    birthYear: 0,
    gender: ''
  };

  it("Should 'USER/SET_USER' Case Returns State", () => {
    const payload = {
      firstName: 'John',
      lastName: 'Doe'
    };

    expect(reducer(undefined, { type: 'USER/SET_USER', payload })).toEqual({
      ...initialState,
      ...payload
    });
  });

  it("Should 'USER/RESET_USER' Case Returns Initial State", () => {
    const state = {
      firstName: 'John',
      lastName: 'Doe'
    };

    expect(reducer(state, { type: 'USER/RESET_USER' })).toEqual(initialState);
  });
});
