import * as Actions from '../actions';

describe('User: Actions', () => {
  it("Should 'setUser' Returns 'type' & 'payload'", () => {
    const payload = [
      {
        firstName: 'John',
        lastName: 'Doe'
      }
    ];

    expect(Actions.setUser(payload)).toEqual({
      type: 'USER/SET_USER',
      payload
    });
  });

  it("Should 'resetUser' Returns 'type'", () => {
    expect(Actions.resetUser()).toEqual({
      type: 'USER/RESET_USER'
    });
  });
});
