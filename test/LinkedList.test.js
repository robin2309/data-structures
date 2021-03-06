import LinkedList from '../src/LinkedList';

describe('LinkedList', () => {
  it('should first and last be null when instantianted', () => {
    const newList = new LinkedList();
    expect(newList.first).toBeNull();
    expect(newList.last).toBeNull();
  });

  it('should add one element', () => {
    const newList = new LinkedList();
    const elementToAdd = 'first elt';
    newList.add(elementToAdd);
    expect(newList.first).toEqual(elementToAdd);
    expect(newList.last).toEqual(elementToAdd);
  });

  it('should add 2 elements', () => {
    const newList = new LinkedList();
    const elementToAdd1 = 'first elt';
    const elementToAdd2 = 'second elt';
    const expectedLastElement = {
      value: elementToAdd2,
      next: null
    };
    newList.add(elementToAdd1);
    newList.add(elementToAdd2);
    expect(newList.first).toEqual(elementToAdd1);
    expect(newList._first.next).toEqual(expectedLastElement);
    expect(newList.last).toEqual(elementToAdd2);
  });

  it('should add 3 elements', () => {
    const newList = new LinkedList();
    const elementToAdd1 = 'first elt';
    const elementToAdd2 = 'second elt';
    const elementToAdd3 = 'third elt';
    const expectedLastElement = {
      value: elementToAdd3,
      next: null
    };
    const expectedSecondElement = {
      value: elementToAdd2,
      next: expectedLastElement
    };
    newList.add(elementToAdd1);
    newList.add(elementToAdd2);
    newList.add(elementToAdd3);
    expect(newList.first).toEqual(elementToAdd1);
    expect(newList._first.next).toEqual(expectedSecondElement);
    expect(newList.last).toEqual(elementToAdd3);
  });

  it('should return array of values when spread', () => {
    const newList = new LinkedList();
    const elementToAdd1 = 'first elt';
    const elementToAdd2 = 'second elt';
    const elementToAdd3 = 'third elt';
    newList.add(elementToAdd1);
    newList.add(elementToAdd2);
    newList.add(elementToAdd3);
    const values = [
      elementToAdd1,
      elementToAdd2,
      elementToAdd3
    ];
    expect([...newList]).toEqual(values);
  });

  it('should return size 0 when no elements', () => {
    const newList = new LinkedList();
    expect(newList.size()).toEqual(0);
  });

  it('should return size 1 when one element', () => {
    const newList = new LinkedList();
    const elementToAdd1 = 'first elt';
    newList.add(elementToAdd1);
    expect(newList.size()).toEqual(1);
  });

  it('should return size 2 when two elements', () => {
    const newList = new LinkedList();
    const elementToAdd1 = 'first elt';
    const elementToAdd2 = 'second elt';
    newList.add(elementToAdd1);
    newList.add(elementToAdd2);
    expect(newList.size()).toEqual(2);
  });
});
