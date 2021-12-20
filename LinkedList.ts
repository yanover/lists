export class LinkedList<T> {
  private _list: Link;

  get list() {
    return this._list;
  }

  push(item: T): void {}

  getSize(): number {
    let cursor: Link = this.list;
    let counter = 0;

    while (cursor.next !== null) {
      counter++;
    }

    return counter;
  }
}

abstract class Link {
  value: any;
  next: Link;

  constructor(value: any, next: Link) {
    this.value = value;
    this.next = next;
  }
}
