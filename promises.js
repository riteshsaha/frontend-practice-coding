const url = "https://api.github.com/users/alok722";

const userData = fetch(url);
console.log(userData);

// This returns Promise { <pending> } as Javascript does not wait for the response from the API call.

// We need to use .then and have a callback function to wait for the API call to return back the Promise.

fetch(url).then(res => {
    console.log(res);
});

// Here we are also using callback function but the difference is that we are attaching a function which is only triggered only when the response is returned as a Promise where it is fulfilled or rejected.

// In normal callback function, we pass a function to the previous function which allows the parent function to have control over the child function which is passed into it.

// Three Promise states - Pending, Fulfilled and Rejected.

// Promise object is a placeholder for certain period of time until we receive value from asynchronous operation.

// Promise has three parts - prototype, promiseResult, promiseState.

// promiseResult is undefined unless the Promise is fulfilled or rejected. Once completed, it stores the result.

// promiseState determines the state of the Promise which is pending, fulfilled or rejected.


// How does Promise resolve Callback Hell?

// Callback Hell, Its very difficult to maintain. This is also called pyramid of doom.

// The control of child functions are handled by parent function which should not be given.

api.createOrder(cart, function () {
    api.proceedToPayment(function () {
        api.showOrderSummary(function () {
            api.updateOrderStatus();
        });
    });
});

// Promise Chaining. 

// The promise / data returned from first API call is send to the next as an input.

api.createOrder(cart).then(paymentInfo => {
    api.proceedToPayment(paymentInfo).then(orderInfo => {
        api.showOrderSummary(orderInfo).then(orderState => {
            api.updateOrderStatus(orderState);
        });
    });
});


// How does Promise work internally?

function createOrder(cart) {
    const promise = new Promise(function (resolve, reject) {
        if (!validateCart(cart)) {
            reject(new Error("Invalid Cart!"));
        }
        resolve("12345");
    });
    return promise;
}

// In a function which returns , we either resolve or reject the promise.

const promise = createOrder(cart);

promise.then(orderId => {
    console.log(orderId);
});

// Promise Chaining

//  Error Handling in Promise

createOrder(cart).then(orderId => {
    console.log(orderId);
    return orderId;
}).proceedToPayment(orderId).then(paymentInfo => {
    console.log(paymentInfo);
    return paymentInfo;
}).showOrderSummary(paymentInfo).then(orderInfo => {
    console.log(orderInfo);
    return orderInfo;
}).updateOrderStatus(orderInfo).then(orderState => {
    console.log(orderState);
}).catch (error => {
    console.log(error);
});

// What if we want to continue execution even if any of my promise is failing, how to achieve this?

createOrder(cart).then(orderId => {
    console.log(orderId);
    return orderId;
}).catch (error => {
    console.log(error);
}).proceedToPayment(orderId).then(paymentInfo => {
    console.log(paymentInfo);
    return paymentInfo;
}).showOrderSummary(paymentInfo).then(orderInfo => {
    console.log(orderInfo);
    return orderInfo;
}).updateOrderStatus(orderInfo).then(orderState => {
    console.log(orderState);
});

// This catch block is only concerned about handling error on the first call.