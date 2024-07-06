// Function Currying

// Function currying is used to transform a multi-argument function into several functions having single argument each.

// function simpleFunction(param1, param2, param3, ....) => function curriedFunction(param1)(param2)(param3).....

// Simple Function

function calculateVolume(length, breadth, height) {
    console.log(length * breadth * height);     // 1000
}

calculateVolume(5, 10, 20);

// Curried Function

function calculateVolumeUsingCurrying(x) {
    return function (y) {
        return function (z) {
            console.log(x * y * z);
        }
    }
}

calculateVolumeUsingCurrying(5)(10)(20);    // 1000
