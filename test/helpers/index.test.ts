import { compose, pipe, filterArray } from '../../src/helpers/index';

describe('Helpers', () => {
  test('Compose function - with mathematical operations', () => {
    const add = (a: number) => a + 10;
    const multiply = (b: number) => b * 2;
    const operation = compose(add, multiply);
    expect(operation(2)).toBe(14);
  });
  
  test('Pipe function - with mathematical operations', () => {
    const add = (a: number) => a + 10;
    const multiply = (b: number) => b * 2;
    const operation = pipe(add, multiply);
    expect(operation(2)).toBe(24);
  });
  
  test('Filter function - filters number > 4', () => {
    const array = [1, 2, 3, 4, 5, 6];
    const filterFunc = (elt: number) => elt <= 4;
    expect(filterArray(array, filterFunc)).toEqual([1, 2, 3, 4]);
  });
  test('Filter function - filters number > 4, no element deletion', () => {
    const array = [1, 2, 3, 4];
    const filterFunc = (elt: number) => elt <= 4;
    expect(filterArray(array, filterFunc)).toEqual(array);
  });
});