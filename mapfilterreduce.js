// Map Functions

var arr = [1, 2, 3, 4, 5];

function double(x) {
    return x * 2;
}

function triple(x) {
    return x * 3;
}

function binary(x) {
    return x.toString();
}

console.log(arr.map(double));
console.log(arr.map(triple));
console.log(arr.map(binary));

console.log(arr.map(x => x * 2));
console.log(arr.map(x => x * 3));
console.log(arr.map(x => x.toString()));

// Filter functions

function isOdd(x) {
    return x % 2;
}

console.log(arr.filter(isOdd));
console.log(arr.filter(x => x % 2));

// Reduce function

// Write function to calculate sum of each number in array

function findSum(arr) {
    let sum = 0;
    for (var i of arr) {
        sum += i;
    }
    return sum;
}

console.log(findSum(arr));

const sumArr = arr.reduce((acc, curr) => {
    acc += curr;
    return acc;
}, 0);

console.log(sumArr);

// Write function to calculate max element in array

const maxElement = arr.reduce((acc, curr) => {
    if (curr > acc) {
        acc = curr;
    }
    return acc;
}, 0);

console.log(maxElement);

// Write function to print full name of all elements.

const users = [
	{ firstName: "Alok", lastName: "Raj", age: 23 },
	{ firstName: "Ashish", lastName: "Kumar", age: 29 },
	{ firstName: "Ankit", lastName: "Roy", age: 29 },
	{ firstName: "Pranav", lastName: "Mukherjee", age: 50 },
];

console.log(users.map(user => user.firstName + " " + user.lastName));

// Write function to print how many unique ppl with unique age are there.

console.log(users.reduce((acc, curr) => {
    if (acc[curr.age]) {
        acc[curr.age]++;
    } else {
        acc[curr.age] = 1;
    }
    return acc;
}, {}));

// Write function to print first name of all people whose age is less than 30.

// Using filter and map function
console.log(users.filter(user => user.age < 30).map(user => user.firstName));

// Using reduce function
console.log(users.reduce((acc, curr) => {
    if (curr.age < 30) {
        acc.push(curr.firstName);
    }
    return acc;
}, []));


