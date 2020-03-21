// Jorge Acosta Linked Lists Exercise

class Node {
  constructor(data, next = null) {
    (this.data = data), (this.next = next);
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  addAtBeginning(value) {
    let newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
  }
  addAtEnd(value) {
    let newNode = new Node(value);
    let tail;
    if (this.head === null) {
      this.head = newNode;
      // tail = this.head;
    } else {
      tail = this.head;
      while (tail.next !== null) {
        tail = tail.next;
      }
      tail.next = newNode;
    }
  }
  deleteBeginning() {
    this.head = this.head.next;
  }
  deleteEnd() {
    if (this.head === null) return -1;
    if (this.head.next === null) this.head = null;
    let previous = this.head;
    let tail = previous.next;
    while (tail.next) {
      previous = tail;
      tail = tail.next;
    }
    previous.next = null;
  }
  reverse() {
    if (this.head === null) return -1;
    if (this.head.next === null) return this.head;

    let previous = null;
    let curNode = this.head;
    while (curNode) {
      let temporal = curNode.next;
      curNode.next = previous;
      previous = curNode;
      curNode = temporal;
    }
    this.head = previous;
    return this.head;
  }
  //
  removeDuplicates() {
    if (this.head === null) return -1;
    if (this.head.next === null) return this.head;

    let previous = this.head;
    let current = previous.next;
    let dictionary = {};
    dictionary[previous.data] = 1;
    while (current) {
      if (dictionary[current.data] === 1) {
        previous.next = current.next;
      } else {
        dictionary[current.data] = 1;
        previous = current;
      }
      current = current.next;
    }
    return this.head;
  }
}
a = new LinkedList();

//***reverse a linked list****
//input 1,2,3 should be 3,2,1

//remove duplicates from a linked list
//1,2,3,3,2,1 should return 1,2,3
//make my own classes and methods

a.addAtBeginning(1);
a.addAtBeginning(1);
a.addAtEnd(2);
a.addAtEnd(2);
a.addAtEnd(3);
a.addAtEnd(3);
console.log(a);
a.reverse();
console.log(a);
a.removeDuplicates();
console.log(a);
