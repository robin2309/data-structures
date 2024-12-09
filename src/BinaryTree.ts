// @ts-check

class Node {
  private _left: Node | null;
  private _right: Node | null;
  private _value: any;

  constructor (value: any) {
    /** @type {Node} */
    this._left = null;
    /** @type {Node} */
    this._right = null;
    /** @type {any} */
    this._value = value;
  }

  get value (): any {
    return this._value;
  }
  
  get left (): Node | null {
    return this._left;
  }
  
  get right (): Node | null {
    return this._right;
  }

  set left(node: Node) {
    this._left = node;
  }

  set right(node: Node) {
    this._right = node;
  }
};

// TODO
// create from array
// search
// insert
// remove?

export default class BinaryTree {
  private _root: Node | null;

  constructor () {
    /** @type {Node} */
    this._root = null;
  }

  get root() {
    return this._root;
  }

  insert (value: any) {
    const newNode = new Node(value);

    if (this._root === null) {
      this._root = newNode;
      return;
    }

    const queue = [this._root];

    while(queue.length >= 1) {
      const currentNode = queue.shift() || new Node(1);
      if (currentNode.left === null) {
        currentNode.left = newNode;
        return;
      } else {
        queue.push(currentNode.left);
      }

      if (currentNode.right === null) {
        currentNode.right = newNode;
        return;
      } else {
        queue.push(currentNode.right);
      }
    }
  }
};
