// @ts-check

export default class LinkedList {
  constructor () {
    /** @type {{next: object, value: object}} */
    this._first = null;
    /** @type {{next: object, value: object}} */
    this._last = null;
  }

  get first () {
    return this._first ? this._first.value : null;
  }

  get last () {
    return this._first ? this._last.value : null;
  }

  add (element) {
    const elementToAdd = {
      value: element,
      next: null
    };
    if (!this._first) { // size = 0
      this._first = elementToAdd;
    } else if (!this._first.next) { // size = 1
      this._first.next = elementToAdd;
    } else { // size > 1
      this._last.next = elementToAdd;
    }
    this._last = elementToAdd;
  }

  size () {
    let counter = 0;
    // eslint-disable-next-line no-unused-vars
    for (let element of this) counter++;
    return counter;
  }

  * [Symbol.iterator] () {
    let current = this._first;
    if (current) {
      yield current.value;
      while (current.next) {
        current = current.next;
        yield current.value;
      }
    }
  }
}
