/*

{
    var a = 10;
    let b = 15;
    const c = 20;
    // Here let and const are hoisted in Block scope,
    // While, var is hoisted in Global scope.
}
console.log(a);     // 10
//console.log(b);     // ReferenceError: b is not defined
//console.log(c);     // ReferenceError: c is not defined
*/

var a = 100;
{
    var a = 10;
    console.log(a);     // 100
}
console.log(a);     // 100, , instead of the 100 we were expecting. So block "a" modified val of global "a" as well. In console, only b and c are in block space. a initially is in global space(a = 100), and when a = 10 line is run, a is not created in block space, but replaces 100 with 10 in global space itself.

let b = 100;
const c = 50;
{
    let b = 10;
    const c = 5;
    console.log(b);     // 10
    console.log(c);     // 5
}
console.log(b);     // 100, let is BLOCK SCOPED.
console.log(c);     //  50, const is also BLOCK SCOPED.
// Both b's are in separate spaces (one in Block(10) and one in Script(another arbitrary mem space)(100)). Same is also true for *const* declarations.

// Same logic applies for functions.
var x = 1000;
let y = 2000;
const z = 3000;
function scope() {
    var x = 10;
    let y = 15;
    const z = 20;

    console.log(x);     // 10
    console.log(y);     // 15
    console.log(z);     // 20
}
scope();
console.log(x);     // 1000
console.log(y);     // 2000
console.log(z);     // 3000


// ILLEGAL SHADOWING
let a1 = 20;
var b1 = 10;
{
    let b1 = 5;      // Allows shadowing.
    //var a1 = 10;     // SyntaxError: Identifier 'a1' has already been declared
}
// We cannot shadow let with var. But it is valid to shadow a let using a let. However, we can shadow var with let.

let a2 = 20;
function x() {
    var a2 = 20;    // Since var is function scoped; it works.
}



