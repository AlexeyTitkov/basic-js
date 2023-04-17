const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr, depth = 1) {
     // Задам переменную maxDepth равную начальной глубине
    let maxDepth = depth;
     // Проходим циклом по каждому элементу массива
    for (let i = 0; i < arr.length; i++) {
     // Если элемент массива является массивом, то рекурсивно вызываем метод calculateDepth,
     // увеличивая глубину на 1
      if (Array.isArray(arr[i])) {
        const currentDepth = this.calculateDepth(arr[i], depth + 1);
       // Если текущая глубина больше максимальной, то обновляем максимальную глубину
        if (currentDepth > maxDepth) {
          maxDepth = currentDepth;
        }
      }
    }
     // Возвращаем максимальную глубину
    return maxDepth;
  }
}

module.exports = {
  DepthCalculator
};
