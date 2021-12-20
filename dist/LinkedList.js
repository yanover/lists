"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
class LinkedList {
    constructor() {
        this._list = new Link();
        this.list.next = null;
        this.list.value = undefined;
    }
    get list() {
        return this._list;
    }
    push(item) {
        let last = this.last().link;
        last.value = item;
    }
    last() {
        let cursor = this.list;
        let counter = 0;
        while (true) {
            if (cursor.next !== null) {
                cursor = cursor.next;
                counter++;
            }
            else {
                break;
            }
        }
        return { length: counter, link: cursor };
    }
}
exports.LinkedList = LinkedList;
class Link {
    constructor() {
        this._value = undefined;
        this._next = null;
    }
    get value() {
        return this._value;
    }
    get next() {
        return this._next;
    }
    set next(value) {
        this._next = value;
    }
    set value(value) {
        this._value = value;
    }
}
