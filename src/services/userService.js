import { capitalizeStr, getRandomInt } from '../utils';
import { INVALID_DOMAIN } from '../constants';

/**
 * @method buildLoginResult
 * @param {*} userData
 * @returns {*} Login Result
 */
const buildLoginResult = userData => ({
  login: userData.login,
  passwordStrong: userData.password.length,
  email: userData.email.toLowerCase()
});

/**
 * @method buildRegisterResult
 * @param {*} userData
 * @returns {*} Register Result
 */
const buildRegisterResult = userData => {
  const userDate = new Date();
  userDate.setFullYear(userDate.getFullYear() - userData.yearOld);

  return {
    firstName: capitalizeStr(userData.firstName),
    lastName: userData.lastName.toUpperCase(),
    birthYear: userDate.getFullYear(),
    gender: userData.gender === 'gentleman' ? 'Boy' : 'Girl'
  };
};

const userService = {
  /**
   * @method loginUser
   * @param {*} userData
   * @returns {Promise}
   */
  loginUser: userData => {
    return new Promise((resolve, reject) => {
      const millis = getRandomInt([...userData.password].length) * 1000;

      /**
       * TODO:
       * Modifier / Corriger / Optimizer l'algorithme ci-dessous pour n'accepter que les noms de domaine suivants :
       * 'Gmail', 'Outlook', 'Yahoo', 'ProtonMail'
       */
       const domainList = ['gmail', 'outlook', 'yahoo', 'protonmail'];
       const isValid = domainList.includes(userData.email.split('@')[1].split('.')[0].toLowerCase());

      setTimeout(() => {
        if (isValid) {
          const result = buildLoginResult(userData);
          resolve(result);
        } else {
          reject(INVALID_DOMAIN);
        }
      }, millis);
    });
  },
  /**
   * @method registerUser
   * @param {*} userData
   * @returns {Promise}
   */
  registerUser: userData => {
    return new Promise((resolve, reject) => {
      const millis = getRandomInt([...userData.gender].length) * 1000;

      setTimeout(() => {
        const result = buildRegisterResult(userData);
        resolve(result);
      }, millis);
    });
  }
};

export default userService;
