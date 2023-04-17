const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  // Создаем переменные для закодированной строки и количества повторяющихся символов
  let encoded = '';
  let count = 1;

  // Проходим циклом по каждому символу строки
  for (let i = 0; i < str.length; i++) {
    // Если текущий символ равен следующему, увеличиваем счетчик
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      // Если символ не повторяется, добавляем закодированный символ в строку encoded
      // Если символ повторяется более одного раза,
      // добавляем количество повторений и символ в закодированную строку
      encoded += count > 1 ? count + str[i] : str[i];
      // Сбрасываем счетчик
      count = 1;
    }
  }

  // Возвращаем закодированную строку
  return encoded;
}

module.exports = {
  encodeLine
};
