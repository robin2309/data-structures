import HashTable from '../src/HashTable';

describe('HashTable', () => {
  describe('contructor', () => {
    it('instantiates correctly', () => {
      const newHash = new HashTable();
      expect(newHash.table).toEqual({});
    });
  });

  describe('hash function', () => {
    const testCases = [
      {
        param: null,
        returns: 0
      },
      {
        param: 123,
        returns: 0
      },
      {
        param: '',
        returns: 0
      },
      {
        param: 'a',
        returns: 97
      },
      {
        param: 'abc',
        returns: 294
      }
    ];

    testCases.forEach((testCase: any) => {
      it(`should return ${testCase.returns} when key ${testCase.param}`, () => {
        const newHash = new HashTable();
        expect(newHash._hashFunction(testCase.param)).toEqual(testCase.returns);
      });
    });
  });

  describe('insert method', () => {
    it('Should return HashTable containing the inserted value', () => {
      const newHash = new HashTable();
      const key = 'testKey';
      const value = 'testValue';
      expect(newHash.insert(key, value)).toBe(newHash);
      expect(newHash.contains(key)).toEqual(true);
    });
  });

  describe('contains method', () => {
    it('should return false if does not contain value', () => {
      const newHash = new HashTable();
      expect(newHash.contains('test')).toEqual(false);
    });

    it('should return true if contains value', () => {
      const newHash = new HashTable();
      const key = 'testKey';
      const value = 'testValue';
      newHash.insert(key, value);
      expect(newHash.contains(key)).toEqual(true);
    });
  });

  describe('get method', () => {
    it('should return null if does not have matching value', () => {
      const newHash = new HashTable();
      const key = 'testKey';
      expect(newHash.get(key)).toEqual(null);
    });

    it('should return the matching value if it contains it', () => {
      const newHash = new HashTable();
      const key = 'testKey';
      const value = 'testValue';
      newHash.insert(key, value);
      expect(newHash.get(key)).toEqual(value);
    });
  });
});
