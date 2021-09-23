export default function counter(state = 0, action = {}) {
  switch (action.type) {
    case 'Counter - Set Counter':
      return state + action.payload;

    case 'Counter - Reset Counter':
      return -10;

    default:
      return state;
  }
}
