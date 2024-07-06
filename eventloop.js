console.log("Start");
setTimeout(function () {
    console.log("Timeout");     // Function reference is stored inside the callback queue. Once timer expires, it is pushed by Event loop into Call Stack for execution.
}, 2000);
fetch("https://jsonplaceholder.typicode.com/users/1").then(response => {
    console.log("Fetch CallBack");              // Once ready, it goes to Microtask Queue which has higher priority than Callback/Task Queue.
});

fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(response => response.json())          // Once ready, it goes to Microtask Queue which has higher priority than Callback/Task Queue.
    .then(json => console.log(json));

console.log("End");

// Output: Start End Fetch Callback {JSON_Response Object} Timeout

/*
console.log("Start");
document.getElementById("btn-click").addEventListener("click", function() {
    console.log("Button Clicked!");     // This cb() stays inside web api env and waits for button to be clicked so that it can be invoked and pushed to callback queue which via help of event loop can push to call stack for execution.
});
// Event listeners stays in webapi env forever, until browser is closed or event listener is explicitly removed.
console.log("End");
*/

// All the callback functions that come through promises go in microtask Queue.
// If the task in microtask Queue keeps creating new tasks in the queue, element in callback queue never gets chance to be run. This is called starvation.
