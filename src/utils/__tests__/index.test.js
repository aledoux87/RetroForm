import { getRandomInt, capitalizeStr } from '../index';

describe('utils', () => {
  it('getRandomInt', () => {
    expect(getRandomInt(5)).toBeGreaterThan(0);
    expect(getRandomInt(3)).toBeLessThanOrEqual(3);
  });

  it('capitalizeStr', () => {
    expect(capitalizeStr('JOHN')).toEqual('John');
    expect(capitalizeStr('doe')).toEqual('Doe');
  });
});
