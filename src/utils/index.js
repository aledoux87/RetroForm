/**
 * @method getRandomInt
 * @param {number} maxInt
 * @returns {number}
 */
export const getRandomInt = maxInt => Math.floor(Math.random() * maxInt) + 1;

/**
 * @method capitalizeStr
 * @param {string} str
 * @returns {string}
 */
export const capitalizeStr = ([firstChar, ...str]) => firstChar.toUpperCase() + str.join('').toLowerCase();
