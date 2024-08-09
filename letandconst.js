/*
console.log(a);   // ReferenceError: Cannot access 'a' before initialization; 
                    // let variables are in separate memory object outside GEC called Script, where it can be accessed after assigning a value.
                    // This statement is executed in Temporal Dead Zone of a.
console.log(b);     // undefined; var variables are stored inside GEC.
let a = 10;
console.log(a);     // 10
var b = 15;
console.log(b);     // 15
*/


/*
let a = 10;
let a = 5;  // SyntaxError: Identifier 'a' has already been declared
var a = 5;      // SyntaxError: Identifier 'a' has already been declared

var b = 10;
var b = 5;          // No error; can be reassigned in case of var.
let b = 5;          // SyntaxError: Identifier 'b' has already been declared.
*/

let a;
a = 10;
console.log(a); // 10

/*
const b;        // SyntaxError: Missing initializer in const declaration
b = 100;
console.log(b);
*/

/*
const b = 100;
b = 1000;           // TypeError: Assignment to constant variable.
console.log(b);
*/


