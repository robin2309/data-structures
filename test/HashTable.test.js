import HashTable from '../src/HashTable';

describe('HashTable', () => {
  describe('contructor', () => {
    it('instantiates correctly', () => {
      const newHash = new HashTable();
      expect(newHash._table).toEqual({});
    });
  });

  describe('hash function', () => {
    const testCases = [
      {
        param: '',
        returns: 0
      }
    ];

    testCases.forEach(testCase => {
      it(`should return ${testCase.returns} when key ${testCase.param}`, () => {
        const newHash = new HashTable();
        expect(newHash._hashFunction(testCase.param)).toEqual(testCase.returns);
      });
    });
  });
});
