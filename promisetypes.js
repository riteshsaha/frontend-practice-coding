// Types of Promises

const p1S = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("P1 Success");
    }, 2000);
});
const p2S = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("P2 Success");
    }, 1000);
});
const p3S = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("P3 Success");
    }, 3000);
});
const p1F = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('P1 Failed');
  }, 2000);
});
const p2F = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('P2 Failed');
  }, 1000);
});
const p3F = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('P3 Failed');
  }, 3000);
});

// Promise.all()
/*
Promise.all([p1S, p2S, p3S]).then(results => {
    console.log(results);       // [ 'P1 Success', 'P2 Success', 'P3 Success' ] -- Completed in 3 seconds
}).catch(err => {
    console.log(err);
});

Promise.all([p1S, p2F, p3S])
  .then(results => console.log(results))
  .catch(err => console.error(err)); // throws error after 1 sec i.e. 'P2 Failed'

Promise.all([p1S, p2S, p3F])
  .then(results => console.log(results))
  .catch(err => console.error(err)); // throws error after 3 sec i.e. 'P3 Failed'


Promise.all([p1F, p2F, p3F])
  .then(results => console.log(results))
  .catch(err => console.error(err)); // throws error after 1 sec i.e. 'P2 Failed'
*/

// Promise.allSettled()

/*
Promise.allSettled([p1S, p2S, p3S]).then(results => {
    console.log(results);
}).catch(err => {
    console.log(err);
});*/

/* Output:
[
  { status: 'fulfilled', value: 'P1 Success' },
  { status: 'fulfilled', value: 'P2 Success' },
  { status: 'fulfilled', value: 'P3 Success' }
]       ------------------ Completed in 3 seconds
*/

/*
Promise.allSettled([p1S, p2F, p3S])
  .then(results => console.log(results))
  .catch(err => console.error(err));
*/

/* Output:
[
  { status: 'fulfilled', value: 'P1 Success' },
  { status: 'rejected', reason: 'P2 Failed' },
  { status: 'fulfilled', value: 'P3 Success' }
]      ------------------ Completed in 3 seconds
*/

/*
Promise.allSettled([p1F, p2F, p3F])
  .then(results => console.log(results))
  .catch(err => console.error(err));
*/

/* Output:
[
  { status: 'rejected', reason: 'P1 Failed' },
  { status: 'rejected', reason: 'P2 Failed' },
  { status: 'rejected', reason: 'P3 Failed' }
]       ----------------------- Completed in 3 seconds
*/

// Promise.race()

/*
Promise.race([p1S, p2S, p3S]).then(results => {
    console.log(results);       // P2 Success; Completed in 1 second
}).catch(err => {
    console.log(err);
});

Promise.race([p1S, p2F, p3S])
  .then(results => console.log(results))
  .catch(err => console.error(err)); // P2 Failed; Completed in 1 second

Promise.race([p1S, p2S, p3F])
  .then(results => console.log(results))
  .catch(err => console.error(err)); // P2 Success; Completed in 1 second


Promise.race([p1F, p2F, p3F])
  .then(results => console.log(results))
  .catch(err => console.error(err)); // P2 Failed; Completed in 1 second
*/

// Promise.any()

Promise.any([p1S, p2S, p3S]).then(results => {
    console.log(results);       // P2 Success; Completed in 1 second
}).catch(err => {
    console.log(err);
});

Promise.any([p1S, p2F, p3S])
  .then(results => console.log(results))
  .catch(err => console.error(err)); // P1 Success; Completed in 2 seconds

Promise.any([p1S, p2S, p3F])
  .then(results => console.log(results))
  .catch(err => console.error(err)); // P2 Success; Completed in 1 second


Promise.any([p1F, p2F, p3F])
  .then(results => console.log(results))
  .catch(err => console.error(err));

/* Output:
[AggregateError: All promises were rejected] {
  [errors]: [ 'P1 Failed', 'P2 Failed', 'P3 Failed' ]
}
*/
