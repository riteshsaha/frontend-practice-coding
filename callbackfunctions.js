// CallBack Functions are First class functions/citizens.

setTimeout(function () {
    console.log("Inside setTimeout callback after 5 seconds");
}, 5000);

function x(y) {
    console.log("x");
    y();
}

x(function y() {
    console.log("y");
});

//Output: x y Inside setTimeout callback after 5 seconds

function printStr(str, cb) {
    setTimeout(function() {
        console.log(str);
        cb();
    }, 2000);
}

printStr("A", () => {
    printStr("B", () => {
        printStr("C", () => {
            console.log("This is end of callbacks.");
        })
    })
});

// Output: A B C This is end of callbacks.

// Callback Hell

var cart = ["shoes", "jersey", "pants"];

api.createOrder(cart, function () {
    api.proceedToPayment(function () {
        api.showOrderSummary(function () {
            api.updateOrderStatus();
        });
    });
});

// 💡 So over here, we are creating a order and then we are blindly trusting `createOrder` to call `proceedToPayment`.

// 💡 It is risky, as `proceedToPayment` is important part of code and we are blindly trusting `createOrder` to call it and handle it.

// 💡 When we pass a function as a callback, basically we are dependant on our parent function that it is his responsibility to run that function. 

//  This is called `inversion of control` because we are dependant on that function. What if parent function stopped working, what if it was developed by another programmer or callback runs two times or never run at all.

