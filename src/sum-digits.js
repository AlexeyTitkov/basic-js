const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n ) {
  // Преобразуем число в строку, затем разбиваем на массив символов, затем преобразуем каждый символ обратно в число
  let parsed = String(n).split('').map(int => parseInt(int));

  // Запускаем цикл, пока массив parsed не будет состоять из оной цифры
  while (parsed.length > 1) {
    // Вычисляем сумму цифр числа, затем преобразуем ее в строку, разбиваем на массив символов,
    // затем преобразуем каждый символ обратно в число
    parsed = String(parsed.reduce((accumulator, currentValue) => accumulator + currentValue)).split('').map(int => parseInt(int));
  }

  // Возвращаем результат в виде числа
  return Number(parsed);
}

module.exports = {
  getSumOfDigits
};
