import BinarySearchTree from '../src/BinarySearchTree';

describe('BinarySearchTree', () => {
  it('insert function', () => {
    const tree = new BinarySearchTree();
    tree.insert(5);
    tree.insert(2);
    tree.insert(3);
    tree.insert(4);
    tree.insert(10);
    expect(tree.root!.value).toEqual(5);
    expect(tree.root!.left!.value).toEqual(2);
    expect(tree.root!.left!.right!.value).toEqual(3);
    expect(tree.root!.left!.right!.right!.value).toEqual(4);
    expect(tree.root!.right!.value).toEqual(10);
  });

  it('has function', () => {
    const tree = new BinarySearchTree();
    tree.insert(5);
    tree.insert(2);
    tree.insert(3);
    tree.insert(4);
    tree.insert(10);
    expect(tree.has(10)).toEqual(true);
    expect(tree.has(4)).toEqual(true);
    expect(tree.has(1)).toEqual(false);
    expect(tree.has(100)).toEqual(false);
  });
})