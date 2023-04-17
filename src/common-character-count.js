const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2 ) {
  let count = 0; // счетчик общих символов, изначально равен 0
  const s1Chars = {}; // объект, в котором будут храниться символы первой строки и их количество в ней

  // перебираем все символы первой строки и заполняем объект s1Chars
  for (let i = 0; i < s1.length; i++) {
    const char = s1[i]; // текущий символ
    // если символ уже есть в объекте s1Chars, увеличиваем количество его вхождений на 1, иначе добавляем его в объект и присваиваем количество вхождений 1
    s1Chars[char] = s1Chars[char] ? s1Chars[char] + 1 : 1;
  }

  // перебираем все символы второй строки
  for (let i = 0; i < s2.length; i++) {
    const char = s2[i]; // текущий символ второй строки
    // если символ присутствует в объекте s1Chars, увеличиваем счетчик на 1 и уменьшаем количество его вхождений в s1Chars на 1
    if (s1Chars[char]) {
      count++;
      s1Chars[char]--;
    }
  }

  return count; // возвращаем счетчик
}

module.exports = {
  getCommonCharacterCount
};
