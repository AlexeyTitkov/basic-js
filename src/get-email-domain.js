const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email ) {
// Находим индекс последнего символа '@' в строке email
  const atIndex = email.lastIndexOf('@');

// Возвращаем доменное имя из строки email, начиная с символа, следующего за '@'
  return email.slice(atIndex + 1);
}

module.exports = {
  getEmailDomain
};
