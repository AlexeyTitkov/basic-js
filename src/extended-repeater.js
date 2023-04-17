const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
// Деструктуризируем объект options
  const {
    repeatTimes = 1, // Количество повторений str
    separator = '+', // Строка, разделяющая повторения str
    addition = '', // Строка, которая будет добавлена после каждого повторения str
    additionRepeatTimes = 1, // Количество повторений addition
    additionSeparator = '|', // Строка, разделяющая повторения addition
  } = options || {};

// Приводим str и addition к строчному типу
  const strString = String(str);
  const additionString = String(addition);

// Если additionRepeatTimes больше 0, то генерируем строку с повторением addition через additionSeparator,
// и обрезаем последний разделитель
  const additionSubstring = additionRepeatTimes > 0
      ? (additionString + additionSeparator).repeat(additionRepeatTimes).slice(0, -additionSeparator.length)
      : '';

// Генерируем итоговую строку с повторением str и additionSubstring через separator,
// и обрезаем последний разделитель
  const repeatedSubstring = strString + additionSubstring;
  const repeatedString = repeatTimes > 0
      ? (repeatedSubstring + separator).repeat(repeatTimes).slice(0, -separator.length)
      : '';

// Возвращаем итоговую строку
  return repeatedString;
}

module.exports = {
  repeater
};
