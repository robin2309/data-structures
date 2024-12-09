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

export default Node;