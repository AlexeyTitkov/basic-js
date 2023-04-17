const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr ) {
  // Создаем массив heights, который содержит элементы из arr,
  // которые не равны -1. И сортируем его по возрастанию.
  const heights = arr.filter(h => h !== -1).sort((a, b) => a - b);

  // Возвращаем новый массив, полученный из arr.
  // Если текущий элемент не равен -1, заменяем его на первый элемент массива heights
  // и удаляем этот элемент из heights. Если текущий элемент равен -1,
  // оставляем его без изменений.
  return arr.map(h => (h !== -1 ? heights.shift() : h));
}

module.exports = {
  sortByHeight
};
