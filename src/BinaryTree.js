// @ts-check

class Node {
  constructor (value) {
    /** @type {Node} */
    this._left = null;
    /** @type {Node} */
    this._right = null;
    /** @type {object} */
    this._value = value;
  }

  get value () {
    return this._value;
  }
};

// TODO
// create from array
// search
// insert
// remove?

export default class Tree {
  constructor (rootValue) {
    /** @type {Node} */
    this._root = new Node(rootValue);
  }
};
