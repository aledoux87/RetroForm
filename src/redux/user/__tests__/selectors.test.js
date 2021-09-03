import * as Selectors from '../selectors';

describe('User: Selectors', () => {
  const state = {
    user: {
      firstName: 'John',
      lastName: 'Doe'
    }
  };

  it("Should 'getUser' Returns State", () => {
    expect(Selectors.getUser({})).toEqual({
      login: '',
      email: '',
      passwordStrong: 0,
      firstName: '',
      lastName: '',
      birthYear: 0,
      gender: ''
    });
    expect(Selectors.getUser(state)).toEqual({
      firstName: 'John',
      lastName: 'Doe'
    });
  });
});
