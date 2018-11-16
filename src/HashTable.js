// @ts-check

export default class HashTable {
  constructor() {
    /** @type {object} */
    this._table = {};
  }

  /**
   * Hash key
   * @param {string} key the key to compute the hash from
   * @returns {number} the hashed key, index to where insert the value
   */
  _hashFunction (key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash;
  }

  /**
   * Check if HashTable contains a key
   * @param {string} value the value in the HashTable
   * @returns {boolean} true if has key, false if not
   */
  contains (value) {

  }

  /**
   * Check if HashTable contains a key
   * @param {string} key the key to compute the hash from
   * @returns {boolean} true if has key, false if not
   */
  containsKey (key) {

  }

  /**
   * Get the value mapped to a key
   * @param {string} key the key to compute the hash from
   * @returns {string} the mapped value
   */
  get (key) {

  }
};
