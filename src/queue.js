const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  getUnderlyingList() {
    return this.head;
  }

  enqueue(value) {
    let node = new ListNode(value); // создаем узел в связном списке
    if (this.head) { // если начальное значение есть (голова), то
      this.tail.next = node; // назначением ссылку на новый узел последнему узлу
      this.tail = node; // переданный узел становится последним узлом (хвост)
    } else { // если начального значения (головы) нет, то
      this.head = node; // переданный узел становится начальным значением (головой)
      this.tail = node; // и также он становится последним узлом (хвостом)
    }
    this.length++; // увеличиваем длину списка на один
  }

  dequeue() {
    let current = this.head; // присваиваем переменной начальное значение узла
    this.head = this.head.next; // удаляем голову и на его место ставим следующий узел
    this.length--; // уменьшаем длину списка на один
    return current.value; // возвращаем удаленный узел
  }
}

const queue = new Queue();
queue.enqueue(5);
queue.enqueue(6);
queue.enqueue(7);
queue.dequeue();

module.exports = {
  Queue
};
