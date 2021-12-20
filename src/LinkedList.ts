export class LinkedList<T> {
  private _list: Link;

  constructor() {
    this._list = new Link();
    this.list.next = null;
    this.list.value = undefined;
  }

  get list() {
    return this._list;
  }

  public push(item: T): void {
    let last: Link = this.last().link
    last.value = item;
  }

  public last(): { length: number; link: Link } {
    let cursor: Link = this.list;
    let counter = 0;

    while (true) {
      if (cursor.next !== null) {
        cursor = cursor.next;
        counter++;
      } else {
        break;
      }
    }

    return { length: counter, link: cursor };
  }
}

class Link {
  private _value: any;
  private _next: Link | null;

  constructor() {
    this._value = undefined;
    this._next = null;
  }

  get value(): any {
    return this._value;
  }

  get next(): Link | null {
    return this._next;
  }

  set next(value: any) {
    this._next = value;
  }

  set value(value: any) {
    this._value = value;
  }
}
