// @ts-check

class ListNode {
  private _value: any;
  private _next: ListNode | null;

  constructor (value: any) {
    this._value = value;
    this._next = null;
  }

  get value(): any {
    return this._value;
  }

  get next(): ListNode | null {
    return this._next;
  }

  set next(newNext: ListNode | null) {
    this._next = newNext;
  }
}

export default class LinkedList {
  private _head: ListNode | null;

  constructor () {
    this._head = null;
  }

  get head (): ListNode | null {
    return this._head;
  }

  add (value: any) {
    const itemToAdd = new ListNode(value);
    if (!this._head) { // size = 0
      this._head = itemToAdd;
    } else {
      let current = this._head;
      while (current) {
        if (!current.next) {
          current.next = itemToAdd;
          break;
        }
        current = current.next;
      }
    }
  }

  has (value: any): boolean {
    if (!this._head) return false;
    let current: ListNode | null = this._head;
    while (current) {
      if (current.value === value) return true;
      current = current.next;
    }
    return false;
  }

  delete (value: any) {
    if (!this._head) return;
    let current: ListNode | null = this._head;
    let parent: ListNode | null = null;
    while (current) {
      if (current.value === value) {
        if (current === this._head) {
          this._head = current.next;
        } else if (parent) {
          parent.next = current.next;
        }
        break;
      }
      parent = current;
      current = current.next;
    }
  }
}
