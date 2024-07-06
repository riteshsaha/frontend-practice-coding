// What is Closure in Javascript?
function outer() {
    var a = 10;
    function inner() {
        var b = 20;
        console.log(a, b);
    }
    return inner;
}

outer()();  // 10 20

console.log(" -------------------------------------------------------- ");

// Will the below code still forms a closure? Yes.
function outer1() {
    function inner1() {
        var b = 20;
        console.log(a, b);
    }
    var a = 10;
    return inner1;
}

outer1()();  // 10 20

console.log(" -------------------------------------------------------- ");

// Changing var to let, will it make any difference? No, output will be same.
function outer2() {
    function inner2() {
        var b = 20;
        console.log(a, b);
    }
    let a = 10;
    return inner2;
}

outer2()();  // 10 20

console.log(" -------------------------------------------------------- ");

// Will inner function have the access to outer function argument? Yes.

function outer3(str) {
    function inner3() {
        var b = 20;
        console.log(a, b, str);
    }
    let a = 10;
    return inner3;
}

outer3("Hello")();  // 10 20 Hello

console.log(" -------------------------------------------------------- ");

// In below code, will inner form closure with outest? Yes.

function outest() {
    var a = 10;
    function outer(str) {
        var b = 20;
        function inner() {
            console.log(a, b, str);
        }
        return inner;
    }
    return outer;
}

outest()("Hello")();    // 10 20 Hello

console.log(" -------------------------------------------------------- ");

// Output of below code and explaination?

function outest() {
    var a = 10;
    function outer(str) {
        var b = 20;
        function inner() {
            console.log(a, b, str);
        }
        return inner;
    }
    return outer;
}
let a = 100;
outest()("Hello")();    // 10 20 Hello; Function takes its nearest scoped variable.

console.log(" -------------------------------------------------------- ");

// Advantage of Closure?
/*
1. Module Design Pattern
2. Currying.
3. Data hiding and encapsulation
4. setTimeouts
5. Memoize
*/

// Discuss more on Data hiding and encapsulation?

var counter = 0;
function increment() {
    //counter++;
    console.log(counter++); // 0
}
increment();
console.log(counter); // 1


// The counter variable can be accessed from anywhere without closure. Data is not hidden.

console.log(" -------------------------------------------------------- ");

function newCounter() {
    var count = 0;
    return function increment() {
        count++;
        console.log(count);
    }
}

//console.log(count);     // ReferenceError: count is not defined; Data is now hidden with function and its closure.

console.log(" -------------------------------------------------------- ");

// We can call above counter() to increment the vaue of count.
var count1 = newCounter();
count1();   // 1

var count2 = newCounter();
count2();   // 1; this is a whole new copy of newCounter() so it wont impact the value of count from previous method.

console.log(" -------------------------------------------------------- ");

// Inorder to make it work as a generic function which can be used to say increment as well as decrement a single instance of count. This is done by invoking its constructor method.

function GenericCounter() {
    var count = 0;
    this.increment = function () {
        count++;
        console.log(count);
    };
    this.decrement = function () {
        count--;
        console.log(count);
    }
}

var counterObj = new GenericCounter();
counterObj.increment();     // 1
counterObj.increment();     // 2
counterObj.decrement();     // 1

console.log(" -------------------------------------------------------- ");

// Disadvantages of Closure?
/*
1. Over consumption of memory
2. Memory Leak
3. Freeze browser
*/

function x1() {
    var a = 10;
    function y1() {
        console.log(a);
    }
    return y1;
}

var z1 = x1();
z1();   // 10; Even though a() is already called and it should be garbage collected but because of closure concept, until z1() is executed, it stores the content of x1() i.e. references of a and y1() inside its memory which isn't garbage collected.

console.log(" -------------------------------------------------------- ");

// Sample program to find min value from an array after going through a function

 function minBy(array, iteratee) {
  let min, result;
  for(let elem of array) {
    let curr = iteratee(elem);
    if ((curr != null) && (min === undefined || curr < min)) {
      min = curr;
      result = elem;
    }
  }
  return result;
}

console.log(minBy([2, 3, 1, 4], (num) => num));         // 1
console.log(minBy([{ n: 1 }, { n: 2 }], (o) => o.n));   // { n: 1 }

console.log(" -------------------------------------------------------- ");