const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {

// Если sampleActivity не является строкой или не может быть преобразовано в "число с плавающей точкой",
// возвращаем false
    if (typeof sampleActivity !== 'string' || isNaN(parseFloat(sampleActivity))) {
      return false;
    }

// Преобразование строки в "число с плавающей точкой"
    const activity = parseFloat(sampleActivity);

// Если activity не лежит в интервале от 0 до MODERN_ACTIVITY, возвращаем false
    if (activity <= 0 || activity > MODERN_ACTIVITY) {
      return false;
    }

// Расчет k, используя полураспад периода
    const k = 0.693 / HALF_LIFE_PERIOD;

// Расчет возраста, округленного до целого в большую сторону
    const age = Math.ceil(Math.log(MODERN_ACTIVITY / activity) / k);

// Возвращаем возраст
    return age;
}

module.exports = {
  dateSample
};
