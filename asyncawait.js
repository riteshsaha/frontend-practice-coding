// async function will always return a promise, even if a string is returned.

async function getData() {
    return "Promise resolved successfully.";
}

const promise = getData();
//console.log(promise);

//promise.then(() => { console.log("getData() executed."); });

/* Output:
Promise { 'Promise resolved successfully.' }
getData() executed.
*/

async function getData1() {
    return p;
}

const p = new Promise((resolve, reject) => {
    resolve("Promise resolved successfully using Promise instance.");
});

const promise1 = getData1();
//console.log(promise1);

//promise1.then(() => { console.log("getData1() executed."); });

/*
Output:

Promise { <pending> }
getData1() executed.
*/

// async-await

async function getData2() {
    const value = await p;
    console.log(value);
    console.log("Printing after awaiting Promise response.");
}

//getData2();

/*
Output:

Promise resolved successfully using Promise instance.
Printing after awaiting Promise response.
*/


// Difference between Promise.then/.catch and async-await

const p1 = new Promise((resolve, reject) => {
    setTimeout(function () {
        resolve("Inside Promise, Timeout completed.")
    }, 3000);
});

p1.then(res => {
    //console.log(res);
});
//console.log("Hello, there!");

/* Output:

Hello, there!
Inside Promise, Timeout completed. ----// printed after 3 seconds.
*/


async function getDataAsync() {
    const output = await p;     // await can only be used inside async method.
    console.log(output);
    console.log("Hello, there!");
}

//getDataAsync();

/* Output:

Promise resolved successfully using Promise instance.  ----// printed after 3 seconds.
Hello, there!
*/


// Real-World example with error handling

async function getDataAsyncAwait() {
    try {
        const data = await fetch('https://api.github.com/users/alok722');
        const res = await data.json();
        console.log(res);
    } catch (err) {
        console.log(err);
    }

}

getDataAsyncAwait();

// Without try/catch can also be called as follows.

/*
getDataAsyncAwait().catch(err => {
    console.log(err);
});
*/