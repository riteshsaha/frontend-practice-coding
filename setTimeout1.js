/*console.log("Start");

setTimeout(function () {
    console.log("setTimeout expired at 5 seconds.");
}, 5000);

console.log("End");

let startTime = new Date().getTime();
let endTime = startTime;
console.log("Time started at 0 seconds");
while (endTime < startTime + 10000) {
    endTime = new Date().getTime();
}
console.log("Time ended at " + (endTime - startTime) / 1000 + " seconds.");
*/

/* Output:
Start
End
Time started at 0 seconds
Time ended at 10 seconds.
setTimeout expired at 5 seconds.
*/
// Trust issues with setTimeout.
// setTimeout guarantees that it will take at least the given timer to execute the code but can take more if Call Stack is having another thread running.

// Timer at 0 seconds
console.log("Start");

setTimeout(function () {
    console.log("setTimeout expired at 0 seconds.");
}, 0);

console.log("End");

/* Output:
Start
End
setTimeout expired at 0 seconds.
*/
// Even though the timer is at 0 seconds, the callback function has to go through the queue. Registers callback in webapi's env , moves to callback queue, and execute once callstack is empty.