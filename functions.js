var x = 1;
a();
b(); // we are calling the functions before defining them. This will work properly, as seen in Hoisting.

function a() {
    var x = 10;     // localscope because of separate execution context
    console.log(x);
}

function b() {
    var x = 100;
    console.log(x);
}

// For browser; window isnt supported in NodeJS
/*
var y = 10;
console.log(y); // 10
console.log(this.y); // 10
console.log(window.y); // 10
*/
