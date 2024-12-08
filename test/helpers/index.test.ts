import { compose, pipe } from '../../src/helpers/index';

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
});