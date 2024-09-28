const { mergeSort } = require("./mergeSort");

describe('mergeSort', () => {
    test('empty', () => {
    expect(mergeSort([])).toEqual([]);
    });

    test('one element', () => {
    expect(mergeSort([1])).toEqual([1]);
    });

    test('two elements', () => {
    expect(mergeSort([2, 1])).toEqual([1, 2]);
    expect(mergeSort([1, 2])).toEqual([1, 2]);
    });

    test('multiple elements', () => {
    expect(mergeSort([9, 3, 6, 2, 1, 11])).toEqual([1, 2, 3, 6, 9, 11]);
    expect(mergeSort([12, 16, 14, 1, 2, 3])).toEqual([1, 2, 3, 12, 14, 16]);
    }); 
});
