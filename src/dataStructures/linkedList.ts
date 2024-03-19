import { Dialog } from '../types/dialog';

class Node<T> {
  id: string;
  dialog: T;
  next: Node<T> | null;
  constructor(value: T) {
    this.id = crypto.randomUUID();
    this.dialog = value;
    this.next = null;
  }
}

class LinkedList<T> {
  head: Node<T> | null;
  tail: Node<T> | null = null;
  length: number = 0;

  constructor(value: T) {
    const node = new Node(value);

    this.head = node;
    this.tail = this.head;
    this.length++;
  }

  push(value: T) {
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      if (this.tail) {
        const temp = this.tail;
        this.tail = node;
        temp.next = node;
      }
    }

    this.length++;

    return this;
  }

  pop() {
    if (!this.head) return undefined;

    let temp = this.head;
    let pre = this.head;

    while (temp?.next) {
      pre = temp;
      temp = temp.next;
    }

    this.tail = pre;
    this.tail.next = null;

    this.length--;

    return temp;
  }
}

const list = new LinkedList(10);
