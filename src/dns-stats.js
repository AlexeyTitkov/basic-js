const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  // Создаем пустой объект, который будем использовать для хранения статистики
  const dnsStats = {};

  // Проходимся по каждому доменному имени в массиве domains
  domains.forEach(domain => {
    // Разбиваем каждое доменное имя на части, используя точку как разделитель
    // и переворачиваем полученный массив частей
    const parts = domain.split('.').reverse();

    // Создаем пустую переменную dns для хранения DNS-имени
    let dns = '';

    // Проходимся по каждой части доменного имени
    parts.forEach(part => {
      // Добавляем точку и текущую часть доменного имени к переменной dns
      dns += `.${part}`;

      // Проверяем, есть ли уже такое DNS-имя в объекте dnsStats
      if (dns in dnsStats) {
        // Если есть, увеличиваем значение этого ключа на 1
        dnsStats[dns]++;
      } else {
        // Если нет, создаем новый ключ со значением 1
        dnsStats[dns] = 1;
      }
    });
  });

  // Возвращаем полученную статистику
  return dnsStats;
}

module.exports = {
  getDNSStats
};
