import LinkedList from '../src/LinkedList';

describe('LinkedList', () => {
  it('should add 2 elements', () => {
    const newList = new LinkedList();
    newList.add(1);
    newList.add(2);
    expect(newList.head!.value).toEqual(1);
    expect(newList.head!.next!.value).toEqual(2);
  });
  
  it('finds the added elements', () => {
    const newList = new LinkedList();
    newList.add(1);
    newList.add(2);
    newList.add(3);
    newList.add(4);
    expect(newList.has(1)).toEqual(true);
    expect(newList.has(3)).toEqual(true);
    expect(newList.has(4)).toEqual(true);
    expect(newList.has(10)).toEqual(false);
  });

  it('deletes the added elements', () => {
    const newList = new LinkedList();
    newList.add(1);
    newList.add(2);
    newList.add(3);
    newList.add(4);
    newList.delete(1);
    expect(newList.head!.value).toEqual(2);
    newList.delete(3);
    expect(newList.head!.value).toEqual(2);
    expect(newList.head!.next!.value).toEqual(4);
  });
});
