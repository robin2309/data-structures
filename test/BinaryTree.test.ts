import BinaryTree from '../src/BinaryTree';

describe('BinaryTree', () => {
  it('insert function', () => {
    const tree = new BinaryTree();
    tree.insert(1);
    tree.insert(2);
    tree.insert(3);
    tree.insert(4);
    tree.insert(5);
    expect(tree.root!.value).toEqual(1);
    expect(tree.root!.left!.value).toEqual(2);
    expect(tree.root!.right!.value).toEqual(3);
    expect(tree.root!.left!.left!.value).toEqual(4);
    expect(tree.root!.left!.right!.value).toEqual(5);
  });
})