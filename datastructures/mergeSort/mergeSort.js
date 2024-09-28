/**
 * @param {Array<number>} arr The input integer array to be sorted.
 * @return {Array<number>}
 */
function mergeSort(arr) {

    if (arr.length <= 1) {
        return arr;
    }

    const midPoint = Math.floor(arr.length / 2);

    const leftArr = arr.slice(0, midPoint);
    const rightArr = arr.slice(midPoint);

    const sortedLeftArr = mergeSort(leftArr);
    const sortedRightArr = mergeSort(rightArr);

    return merge(sortedLeftArr, sortedRightArr);
}

function merge(leftArr, rightArr) {

    const mergedResult = [];
    let l = 0;
    let r = 0;

    while (l < leftArr.length && r < rightArr.length) {
        if (leftArr[l] < rightArr[r]) {
            mergedResult.push(leftArr[l]);
            l++;
        } else {
            mergedResult.push(rightArr[r]);
            r++;
        }
    }

    mergedResult.push(...leftArr.slice(l), ...rightArr.slice(r));
    return mergedResult;
}

module.exports = {
    mergeSort
}