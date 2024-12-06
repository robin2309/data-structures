import Set from '../src/Set';

describe('Set', () => {
  describe('constructor', () => {
    it('should instanciate an empty set when no elements to constructor', () => {
      const newSet = new Set();
      expect(newSet.elements).toEqual([]);
    });

    it('should instanciate an array set when array passed to constructor', () => {
      const newSet = new Set([1, 2, 3, 4, 5]);
      expect(newSet.elements).toEqual([1, 2, 3, 4, 5]);
    });

    it('should instanciate a set with one element array  when object passed to constructor', () => {
      const newSet = new Set('test');
      expect(newSet.elements).toEqual(['test']);
    });
  });

  describe('has method', () => {
    it('should return true if has element', () => {
      const element = 'toAdd';
      const newSet = new Set(element);
      expect(newSet.has(element)).toEqual(true);
    });

    it('should return false if does not have element', () => {
      const element = 'toAdd';
      const newElement = 'hasNot';
      const newSet = new Set(element);
      expect(newSet.has(newElement)).toEqual(false);
    });
  });

  describe('size method', () => {
    it('should return 4 when 4 elements in Set', () => {
      const newSet = new Set([1, 2, 3, 4]);
      expect(newSet.size()).toEqual(4);
    });

    it('should return 0 when Set empty', () => {
      const newSet = new Set();
      expect(newSet.size()).toEqual(0);
    });
  });

  describe('add method', () => {
    it('should add to Set', () => {
      const newSet = new Set();
      const element = 'toAdd';
      newSet.add(element);
      expect(newSet.elements).toEqual([element]);
    });

    it('should not add to Set if already exists', () => {
      const element = 'toAdd';
      const newSet = new Set(element);
      newSet.add(element);
      expect(newSet.elements).toEqual([element]);
    });
  });

  describe('delete method', () => {
    it('should delete if element exists', () => {
      const newSet = new Set();
      newSet
        .add(1)
        .add(2)
        .add(3);
      expect(newSet.delete(3)).toEqual(true);
      expect(newSet.elements).toEqual([1, 2]);
    });

    it('should not delete if element does not exist', () => {
      const newSet = new Set();
      newSet
        .add(1)
        .add(2)
        .add(3);
      expect(newSet.delete(4)).toEqual(false);
    });
  });

  describe('iterable method', () => {
    it('should be iterable', () => {
      const newSet = new Set([1, 2, 3, 4]);
      expect([...newSet]).toEqual([1, 2, 3, 4]);
    });
  });
});
