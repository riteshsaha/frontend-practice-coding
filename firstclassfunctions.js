// What is Function statement?
function b() {
    console.log("Hello World");
}
b();    // Hello World

console.log("--------------------------------------------- ");

// What is Function Expression?

var b1 = function () {
    console.log("Hello");
}
b1();   // Hello

console.log("--------------------------------------------- ");

// Difference between function statement and expression

console.log(a1);    // Prints function a1 itself
console.log(b2);    // undefined
a1();               // Inside a1
//b2();               // TypeError: b2 is not a function

function a1() {
    console.log("Inside a1");
}

var b2 = function () {
    console.log("Inside b2");
}

// b2 is a variable which is stored as undefined before assignment in memory allocation phase in GEC
// whereas a1 is entirely stored as a function in the same phase(Hoisting).

console.log("--------------------------------------------- ");

// What is Function Declaration?

function a2() {
    console.log("Inside a2");
}
a2();

// Same as function statement

console.log("--------------------------------------------- ");

// What is Anonymous Function?

/*function () {

}*/

// SyntaxError: Function statements require a function name
// Anonymous function can exist when assigned to a variable like function expression.

console.log("--------------------------------------------- ");

// What is Named Function Expression?

var b3 = function xyz() {
    console.log("Hello");
}
b3();
//xyz();          // ReferenceError: xyz is not defined

// xyz isnt declared as a function but assigned to a variable hence cannot be called like a separate function.

console.log("--------------------------------------------- ");

// Parameters vs Arguments?
var arg = "Inside b4";
function b4(param) {
    console.log(param);
}
b4(arg);

console.log("--------------------------------------------- ");

// First Class Function aka First Class Citizens?

var b5 = function (param) {
    console.log(param);
}
b5(function () { });    // function() {}


var b6 = function (param) {
    console.log(param);
}
function xyz() {}
b5(xyz);        // function xyz() {}

var b7 = function () {
    return function () {
        console.log("Hello");
    }
}

b7()();     // Hello

