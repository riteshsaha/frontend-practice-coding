const { heapSort } = require('./heapSort');

describe('heapSort', () => {
  test('empty', () => {
    expect(heapSort([])).toEqual([]);
  });

  test('one element', () => {
    expect(heapSort([1])).toEqual([1]);
  });

  test('two elements', () => {
    expect(heapSort([2, 1])).toEqual([1, 2]);
    expect(heapSort([1, 2])).toEqual([1, 2]);
  });
    
  test('multiple elements', () => {
    expect(heapSort([9, 3, 6, 2, 1, 11])).toEqual([1, 2, 3, 6, 9, 11]);
    expect(heapSort([12, 16, 14, 1, 2, 3])).toEqual([1, 2, 3, 12, 14, 16]);
  });
});
