/**
 * @param {Array<number>} arr The input integer array to be sorted.
 * @return {Array<number>}
 */
function heapSort(arr) {
    const size = arr.length;
    
    // Iterating from last parent node to root
    for (let i = Math.floor(size / 2) - 1; i >= 0; i--) {
        buildMaxHeap(arr, size, i);
    }

    // Iterate through the heap backwards, swapping the last element of the heap with the max element (the root of a max heap).
    // Max elements swapped to the end constitute the sorted part of the array (ignored in the next iteration by "j--").
    for (let j = size - 1; j > 0; j--) {
        [arr[0], arr[j]] = [arr[j], arr[0]];
        buildMaxHeap(arr, j, 0);
    }

    return arr;
}

function buildMaxHeap(arr, size, largest) {
    const parentIndex = largest;
    const leftChildIndex = 2 * parentIndex + 1;  // Left child for 0-indexed array
    const rightChildIndex = 2 * parentIndex + 2; // Right Child for 0-indexed array

    // Set `largest` to index with highest value between parent, left and right child.

    if (leftChildIndex < size && arr[largest] < arr[leftChildIndex]) largest = leftChildIndex;

    if (rightChildIndex < size && arr[largest] < arr[rightChildIndex]) largest = rightChildIndex;

    // If `largest` is not the current parent, swap positions with the current parent.
    if (largest !== parentIndex) {
        [arr[parentIndex], arr[largest]] = [arr[largest], arr[parentIndex]];
        // Continue to recursively heapify the affected subtree.
        buildMaxHeap(arr, size, largest);
    }
}

//console.log(heapSort([9, 3, 6, 2, 1, 11])); // [1, 2, 3, 6, 9, 11])
//console.log(heapSort([12, 16, 14, 1, 2, 3])); // [1, 2, 3, 12, 14, 16]);

module.exports = {
    heapSort
}


/*
        12
    16          14
1       2   3  
*/