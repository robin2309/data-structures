// @ts-check

class Node {
  private _left: null;
  private _right: null;
  private _value: any;

  constructor (value: any) {
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
  private _root: Node;

  constructor (rootValue: any) {
    /** @type {Node} */
    this._root = new Node(rootValue);
  }
};
