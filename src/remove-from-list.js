const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */

function removeKFromList(l, k) {
  let node = l; // присваиваем переменной узел
  let prev = null; // предыдущий узел

  while (l) { // пока узел из аргумента есть
    if (l.value === k) { // если значение узла равно k, то        
      if (prev === null) { // если предыдущего узла нет
          l = l.next; // текущий узел из аргумента становится следующим узлом
          node = l; // текущий узел из переменной становится следующим узлом
          continue; // продолжаем проверки
      } else { // если предыдущий узел есть
          prev.next = l.next; // следующий узел предудыщего узла становится следующим узлом
          l = l.next; // текущий узел из аргумента становится следующим узлом
          continue; // продолжаем проверки
      }
    } else { // если значение узла не равно k, то
      prev = l; // предыдущий узел становится текущим
      l = l.next; // текущий узел становится следующим
    }
  }
  return node;
}

var l = { value: 1, next: { value: 2, next: { value: 3, next: { value: 3, next: { value: 4, next: { value: 5, next: { value: 6, next: null } } } } } } };

l = removeKFromList(l, 3);

module.exports = {
  removeKFromList
};