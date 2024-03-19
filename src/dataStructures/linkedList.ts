class ListNode<T> {
  id: string;
  dialog: T;
  next: ListNode<T> | null;
  constructor(value: T) {
    this.id = crypto.randomUUID();
    this.dialog = value;
    this.next = null;
  }
}

export class LinkedList<T> {
  head: ListNode<T> | null = null;
  tail: ListNode<T> | null = null;
  length: number = 0;

  constructor(value?: T) {
    if (!value) return;

    const node = new ListNode(value);

    this.head = node;
    this.tail = this.head;
    this.length++;
  }

  push(value: T) {
    const node = new ListNode(value);

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
