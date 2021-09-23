const OFF = 0;
const WARNING = 1;
const ERROR = 2;

module.exports = {
  extends: ['react-app', 'react-app/jest'],
  rules: {
    'no-console': WARNING
  }
};
