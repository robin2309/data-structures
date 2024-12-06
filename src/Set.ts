// @ts-check

export default class Set {
  private _elements: any[];

  /**
   * Set constructor
   * @param {*} initialElement
   */
  constructor (initialElement?: any) {
    if (!initialElement) this._elements = [];
    else if (initialElement && Array.isArray(initialElement)) {
      this._elements = initialElement.concat();
    } else {
      this._elements = [initialElement];
    }
  }

  get elements(): any[] {
    return this._elements; // Provide read-only access to _elements
  }

  /**
   * Check if Set has element
   * @param {object | number | string | boolean} element
   * @returns true if has element, false if not
   */
  has (element: any) {
    for (let i = 0; i < this._elements.length; i++) {
      if (this._elements[i] === element) return true;
    }
    return false;
  }

  /**
   * Get Set size
   * @returns number of elements in Set
   */
  size () {
    return this._elements.length;
  }

  /**
   * Add element to the Set
   * @param {object | number | string | boolean} element
   * @returns the Set
   */
  add (element: any) {
    if (!this.has(element)) this._elements.push(element);
    return this;
  }

  /**
   * Remove element from the Set
   * @param {object | number | string | boolean} element
   * @returns true if element removed, false if not 
   */
  delete (element: any) {
    for (let i = 0; i < this._elements.length; i++) {
      if (this._elements[i] === element) {
        this._elements.splice(i, 1);
        return true;
      }
    }
    return false;
  }

  /**
   * Implements iterator
   */
  * [Symbol.iterator] () {
    for (let i = 0; i < this._elements.length; i++) {
      yield this._elements[i];
    }
  }
}
