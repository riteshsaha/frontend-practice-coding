class Queue {
  constructor() {
      this.head = null;
      this.tail = null;
      this.size = 0;
  }

  /**
   * Adds an item to the back of the queue.
   * @param {*} item The item to be pushed onto the queue.
   * @return {number} The new length of the queue.
   */
  enqueue(item) {
      const newNode = new Node(item);
      if (this.isEmpty()) {
          this.head = this.tail = newNode;
      } else {
          this.tail.next = newNode;
          this.tail = newNode;
      }
      this.size++;
      return this.length();
  }

  /**
   * Removes an item from the front of the queue.
   * @return {*} The item at the front of the queue if it is not empty, `undefined` otherwise.
   */
  dequeue() {
      if (this.isEmpty()) {
          console.log("Queue is empty!");
      } else {
          const dequeuedValue = this.head.value;
          this.head = this.head.next;
          this.size--;
          return dequeuedValue;
      }
  }

  /**
   * Determines if the queue is empty.
   * @return {boolean} `true` if the queue has no items, `false` otherwise.
   */
  isEmpty() {
      return this.size === 0;
  }

  /**
   * Returns the item at the front of the queue without removing it from the queue.
   * @return {*} The item at the front of the queue if it is not empty, `undefined` otherwise.
   */
    front() {
        if (this.isEmpty()) {
            console.log("Queue is empty!");
            return undefined;
        }
        return this.head.value;
  }

  /**
   * Returns the item at the back of the queue without removing it from the queue.
   * @return {*} The item at the back of the queue if it is not empty, `undefined` otherwise.
   */
  back() {
        if (this.isEmpty()) {
            console.log("Queue is empty!");
            return undefined;
        }
        return this.tail.value;
  }

  /**
   * Returns the number of items in the queue.
   * @return {number} The number of items in the queue.
   */
  length() {
      return this.size;
  }
}

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}


/*const queue = new Queue();
console.log(queue.isEmpty()); // true
queue.enqueue(1);
queue.enqueue(2);
console.log(queue.length()); // 2
queue.enqueue(3);
console.log(queue.front()); // 1
console.log(queue.back()); // 3
console.log(queue.dequeue()); // 1
console.log(queue.isEmpty()); // false
*/

module.exports = {
    Queue
}