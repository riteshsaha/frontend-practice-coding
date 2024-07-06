//"use strict";

function x() {
    console.log(this);  // global window object in non-strict mode; undefined in strict mode
}
//x();

const obj = {
    x: 10,
    func() {
        console.log(this);      // { x: 10, func: [Function: func] }
        console.log(this.x);    // 10
    }
}
obj.func();     // value of `this` is referring to current object i.e. `obj` (local scope)