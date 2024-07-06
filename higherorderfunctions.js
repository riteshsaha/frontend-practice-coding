function x() {
    console.log("Hi");
}

function y(x) {
    return x();
}

y(x);
// y is a Higher Order function and x is a Callback function.

// Use case on why Higher Order functions are important.

const radius = [1, 2, 3, 4, 5];
function calcArea(radius) {
    let output = [];
    for (var i of radius) {
        output.push(Math.PI * i * i);
    }
    return output;
}

console.log(calcArea(radius));

function calcCircumference(radius) {
    let output = [];
    for (var i of radius) {
        output.push(2 * Math.PI * i);
    }
    return output;
}

console.log(calcCircumference(radius));

// This makes the code repetitive. We can simply hava a higher order function which takes in the function definition and applies it on each element of the array.

const area = function (radius) {
    return Math.PI * radius * radius;
}

const circumference = function (radius) {
    return 2 * Math.PI * radius;
}

function calculate(radiusArr, operation) {
    let output = [];
    for (var i of radiusArr) {
        output.push(operation(i));
    }
    return output;
}

console.log(calculate(radius, area));
console.log(calculate(radius, circumference));


// Using polyfills
Array.prototype.calculate1 = function (operation) {
    const output = [];
    for (let i = 0; i < this.length; i++) {
        output.push(operation(this[i]));
    }
    return output;
}

console.log(radius.calculate1(area));

