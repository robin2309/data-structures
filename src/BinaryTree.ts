// @ts-check
import Node from './Node';

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

  // depth first, preorder traversal
  traverseAndFind (node: Node | null, value: any): boolean {
    if (node === null) {
      return false;
    }

    if (node.value === value) {
      return true;
    }

    if (this.traverseAndFind(node.left, value)) {
      return true;
    }

    if (this.traverseAndFind(node.right, value)) {
      return true;
    }
    return false;
  }

  has (value: any): boolean {
    return this.traverseAndFind(this._root, value);
  }
};
