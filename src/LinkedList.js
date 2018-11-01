export default class LinkedList {
  constructor () {
    this._first = null;
    this._last = null;
  }

  get first () {
    return (this._first || {}).value || null;
  }

  get last () {
    return (this._last || {}).value || null;
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

  }
}