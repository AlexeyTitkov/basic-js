const {NotImplementedError} = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
    // Проверяем, является ли входной параметр массивом
    // Если нет, возвращаем ошибку
    if (!Array.isArray(arr)) {
        throw new Error('\'arr\' parameter must be an instance of the Array!');
    }

    // Инициализируем пустой массив, который будет хранить результат
    const result = [];

    // Проходим по всем элементам входного массива
    for (let i = 0; i < arr.length; i++) {

        // Если элемент равен '--discard-next', пропускаем следующий элемент
        if (arr[i] === '--discard-next') {
            i++;
        }
        // Если элемент равен '--discard-prev', удаляем предыдущий элемент из результата
        else if (arr[i] === '--discard-prev') {
            // Удаляем элемент только если предыдущий элемент не был исключен командой '--discard-next'
            if (i > 0 && arr[i - 2] !== '--discard-next') {
                result.pop();
            }
        }
        // Если элемент равен '--double-next', добавляем следующий элемент в результат дважды
        else if (arr[i] === '--double-next') {
            if (i < arr.length - 1) {
                result.push(arr[i + 1]);
            }
        }
        // Если элемент равен '--double-prev', добавляем предыдущий элемент в результат дважды
        else if (arr[i] === '--double-prev') {
            // Добавляем элемент только если предыдущий элемент не был исключен командой '--discard-next'
            if (i > 0 && arr[i - 2] !== '--discard-next') {
                result.push(arr[i - 1]);
            }
        }
        // Если элемент не является командой, добавляем его в результат
        else {
            result.push(arr[i]);
        }
    }

    // Возвращаем полученный результат
    return result;
}

module.exports = {
    transform
};
