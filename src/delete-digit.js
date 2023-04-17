const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
// Преобразуем число в строку
  let numStr = n.toString();
// Инициализируем переменную для хранения максимального значения
  let maxNum = -Infinity;

// Итерируемся по каждой цифре числа
  for (let i = 0; i < numStr.length; i++) {
// Удаляем цифру, находящуюся на текущей позиции
    let newNum = parseInt(numStr.slice(0, i) + numStr.slice(i+1));
// Если новое число больше максимального, обновляем максимальное значение
    if (newNum > maxNum) {
      maxNum = newNum;
    }
  }

// Возвращаем maxNum
  return maxNum;
}

module.exports = {
  deleteDigit
};
