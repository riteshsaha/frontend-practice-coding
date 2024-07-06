// Polyfills


let printDetails = function (country, iplTeam) {
    console.log(this.firstname + " " + this.lastname + " plays for " + country + " and " + iplTeam);
}

// bind() is used to return a new function with a certain context to be invoked later.

const vkPrintDetails = printDetails.bind({firstname: "Virat", lastname: "Kohli"}, "India", "RCB");     
vkPrintDetails();       // Virat Kohli plays for India and RCB

const rsPrintDetails = printDetails.bind({firstname: "Rohit",lastname: "Sharma"}, "India", "MI");
rsPrintDetails();       // Rohit Sharma plays for India and MI

// If we want to add a new method which say is not supported by the browser, we can use polyfills to achieve that.

// Below is the code if we were to add a function similar to bind() to be supoorted by the browser.

Function.prototype.mybind = function (...args) {
    let obj = this;
    let params = args.slice(1);
    return function () {
        obj.apply(args[0], [...params]); 
        //obj.call(args[0], ...params);     // Both will return the same output.
    }
}

let polyfilledBind = printDetails.mybind({ firstname: "Virat", lastname: "Kohli" }, "India", "RCB");
polyfilledBind();       // Virat Kohli plays for India and RCB


