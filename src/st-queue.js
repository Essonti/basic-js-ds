const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

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


// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

module.exports = class Queue {

  // class Queue {	
  //   constructor () {
  //     this.head = null;
  //     this.length = 0;
  //   }
    getUnderlyingList() {
      throw new NotImplementedError('Not implemented');
      // remove line with error and write your code here
    }
  
    enqueue(value) {
      throw new NotImplementedError('Not implemented');
      // let node = new Node (value);
      // if (this.length === 0) {
      //   this.head = node;
      // } else {
      //   if (node.next) {

      //   }

        // let cur = this.head;
        // while (cur.next) {
        //   cur = cur.next;
        // }
        // cur.next = new Node (value);
        // console.log(cur)
      // }
      // this.length++
      // console.log(cur)
     } 
   
    
  
    dequeue() {
      throw new NotImplementedError('Not implemented');
      // remove line with error and write your code here
    }
  
  }
  
  // queue = new Queue();
  //     queue.enqueue(5);
  //     queue.enqueue(6);
  //     queue.enqueue(7);
  //     queue.enqueue(1);
  //     console.log(queue.dequeue())
  //     /* , 5); */
  //     console.log(queue.dequeue())
  //     /* , 6); */
