// @ts-check

export default class HashTable {
  private _table: Record<number, any>;

  constructor () {
    /** @type {object} */
    this._table = {};
  }

  get table(): Record<number, any> {
    return this._table;
  }

  /**
   * Hash key
   * @param {string} value the key to compute the hash from
   * @returns {number} the hashed key, index to where insert the value
   */
  _hashFunction (value: string) {
    if (!value) return 0;
    let hash = 0;
    for (let i = 0; i < value.length; i++) {
      hash += value.charCodeAt(i);
    }
    return hash;
  }

  /**
   * Insert value into HashTable
   * @param {string} value the value to insert
   * @returns {HashTable} the Hashtable
   */
  insert (key: string, value: any) {
    const matchingKey = this._hashFunction(key);
    this._table[matchingKey] = value;
    return this;
  }

  /**
   * Check if HashTable contains a key
   * @param {string} key the key to compute the hash from
   * @returns {boolean} true if has key, false if not
   */
  contains (key: string) {
    const matchingKey = this._hashFunction(key);
    return this._table.hasOwnProperty(matchingKey);
  }

  /**
   * Get the value mapped to a key
   * @param {string} key the key to compute the hash from
   * @returns {string} the mapped value
   */
  get (key: string) {
    const matchingKey = this._hashFunction(key);
    return this._table[matchingKey] || null;
  }
};
