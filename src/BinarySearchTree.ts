// @ts-check
import Node from './Node';

export default class BinarySearchTree {
  private _root: Node | null;

  constructor () {
    /** @type {Node} */
    this._root = null;
  }

  get root() {
    return this._root;
  }

  traverseAndInsert (node: Node, value: any) {
    if (value < node.value) {
      if (node.left === null) {
        node.left = new Node(value);
      } else {
        this.traverseAndInsert(node.left, value);
      }
    } else {
      if (node.right === null) {
        node.right = new Node(value);
      } else {
        this.traverseAndInsert(node.right, value);
      }
    }
  }

  insert (value: any) {
    if (this._root === null) {
      this._root = new Node(value);
      return;
    }
    this.traverseAndInsert(this._root, value);
  }

  // depth first
  traverseAndFind (node: Node | null, value: any): boolean {
    if (node === null) {
      return false;
    }

    console.log(node.value);

    if (node.value === value) {
      return true;
    }

    if (value < node.value) {
      if (node.left) {
        return this.traverseAndFind(node.left, value);
      } else {
        return false;
      }
    }

    if (value > node.value) {
      if (node.right) {
        return this.traverseAndFind(node.right, value);
      } else {
        return false;
      }
    }
    return false;
  }

  has (value: any): boolean {
    return this.traverseAndFind(this._root, value);
  }
};
