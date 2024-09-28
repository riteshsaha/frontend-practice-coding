/**
 * @param {Array<number>} arr The input integer array to be sorted.
 * @return {Array<number>}
 */
function insertionSort(arr) {

    for (let i = 1; i < arr.length; i++) {
        let current = arr[i];

        let j = i - 1;

        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }

        arr[j + 1] = current;
    }

    return arr;
}

//let result = insertionSort([9, 1, 3, 4, 6, 7]);
//console.log(result);

module.exports = {
    insertionSort
}