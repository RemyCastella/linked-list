class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(val) {
    const newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
      return this;
    }
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(val) {
    const newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
      return this;
    }
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  size() {
    console.log(this.length);
    return this.length;
  }

  head() {
    console.log(this.head);
    return this.head;
  }

  tail() {
    console.log(this.tail);
    return this.tail;
  }

  at(index) {
    let i = 0;
    let current = this.head;
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.head;
    while (i < index) {
      current = current.next;
      i++;
    }
    console.log(current);
  }

  pop() {
    let i = 0;
    let current = this.head;
    while (i < this.length - 2) {
      current = current.next;
      i++;
    }

    current.next = null;
    console.log(this.tail);
    this.tail = current;
    this.length--;
    console.log(list);
  }

  contains(val) {
    let current = this.head;
    let i = 0;
    while (i < this.length) {
      if (current.value === val) {
        console.log(true);
        return true;
      }
      current = current.next;
      i++;
    }
    console.log(false);
    return false;
  }

  find(val) {
    let current = this.head;
    let i = 0;
    while (i < this.length) {
      if (current.value === val) {
        console.log(i);
        return i;
      }
      current = current.next;
      i++;
    }
    console.log(null);
    return null;
  }

  toString() {
    let current = this.head;
    let i = 1;
    let string = String(current.value);
    while (i < this.length) {
      current = current.next;
      string = string.concat('->', String(current.value));
      i++;
    }
    string = string.concat('->', null);
    console.log(string);
    return string;
  }

  insertAt(index, val) {
    if (index < 0 || index > this.length) return undefined;
    if (index === 0) {
      this.prepend(val);
      return;
    }
    if (index === this.length - 1) {
      console.log(this.append(val));
      return;
    }
    const newNode = new Node(val);
    let insert = this.head;
    let prev;
    let i = 0;
    while (i < index) {
      prev = insert;
      insert = insert.next;
      i++;
    }
    prev.next = newNode;
    newNode.next = insert;
    return this;
  }

  removeAt(index) {
    let remove = this.head;
    let prev;
    let i = 0;
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) {
      this.head = remove.next;
      remove.next = null;
      this.length--;
      console.log(remove);
      return;
    }
    while (i < index) {
      prev = remove;
      remove = remove.next;
      i++;
    }
    prev.next = remove.next;
    this.length--;
    console.log(remove);
  }
}

const list = new LinkedList();

list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);
list.append(123);
list.append(321);
list.append(987);
