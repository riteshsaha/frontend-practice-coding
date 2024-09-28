/**
 * @param {Array<number>} arr The input integer array to be searched.
 * @param {number} target The target integer to search within the array.
 * @return {number} The index of target element in the array, or -1 if not found.
 */
function binarySearch(arr, target) {

    let low = 0, high = arr.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
         if (arr[mid] > target) {
            high = mid - 1;
        } else if (arr[mid] < target) {
             low = mid + 1;
         } else if (arr[mid] === target) {
             return mid;
        }
    }
    return -1;
}

//console.log(binarySearch([1, 2, 3, 6, 9, 11], 6)); // 3
//console.log(binarySearch([1, 2, 3, 12, 14, 16], 5)); // -1

module.exports = {
    binarySearch
}