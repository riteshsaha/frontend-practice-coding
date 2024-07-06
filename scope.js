/*function a() {
    console.log(b); // Instead of printing undefined it prints 10, So somehow this a function could access the variable b outside the function scope.
}

var b = 10;
a();*/


function a() {
    c();
    function c() {
        console.log(b); // Instead of printing undefined it prints 10, So somehow this a function could access the variable b outside the function scope.
    }
    
}

var b = 10;
a();



/*function a() {
    c();
    function c() {
        var b = 100;
        console.log(b); // 100; Local scope gets priority over Global scope inside the function call
    }
}
var b = 10;
a();*/

/*function a() {
    c();
    function c() {
        var b = 100;
        console.log(b);
    }
}
a();
console.log(b);     // ReferenceError: b is not defined; since global execution context does not what b is as its inside function scope.
*/