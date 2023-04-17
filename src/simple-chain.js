const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [], // Массив для хранения элементов цепи

  getLength() { // Метод для получения длины цепи
    return this.chain.length;
  },

  // Метод для добавления нового элемента в цепь
  addLink(value = '') { // Метод для добавления нового элемента в цепь
    this.chain.push(`( ${value} )`);
    return this; // возвращаем объект chainMaker для возможности цепочного вызова методов
  },

  // Метод для удаления элемента по указанной позиции
  removeLink(position) {
    if (!Number.isInteger(position) || position < 1 || position > this.chain.length) {
      this.chain = []; // очищаем массив, если позиция не является целым числом или выходит за границы массива
      throw new Error("You can't remove incorrect link!");// Возврщаем ошибку
    }
    this.chain.splice(position - 1, 1);// удаляем элемент из массива
    return this; // возвращаем объект chainMaker для возможности цепочного вызова методов
  },

  // Метод для изменения порядка элементов цепи на обратный
  reverseChain() {
    this.chain.reverse(); // изменяем порядок элементов в массиве
    return this; // возвращаем объект chainMaker для возможности цепочного вызова методов
  },

  // Метод для завершения цепи и возвращения результата в виде строки
  finishChain() {
    const result = this.chain.join('~~'); // объединяем элементы массива в строку с разделителем ''
    this.chain = []; // очищаем массив
    return result; // возвращаем строку-результат
  }
};

module.exports = {
  chainMaker
};
