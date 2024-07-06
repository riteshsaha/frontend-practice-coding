// call()

const obj1 = {
    firstname: "Virat",
    lastname: "Kohli",
    printName() {
        console.log(this.firstname + " " + this.lastname);
    }
}
obj1.printName();   // Virat Kohli

const obj2 = {
    firstname: "Rohit",
    lastname: "Sharma",
}

//obj2.printName();   // TypeError: obj2.printName is not a function

// If we are to borrow a function, that is when we use call()

// It directly invokes the printname with the new object passed into it and prints the output.

obj1.printName.call(obj2);  // Rohit Sharma

// A better way to write the above code is as follows.

let printFullName = function () {
    console.log(this.firstname + " " + this.lastname);
}

printFullName.call(obj1);   // Virat Kohli
printFullName.call(obj2);   // Rohit Sharma

// We can also pass parameters to call()

let printDetails = function (country, iplTeam) {
    console.log(this.firstname + " " + this.lastname + " plays for " + country + " and " + iplTeam);
}

printDetails.call(obj1, "India", "RCB");    // Virat Kohli plays for India and RCB
printDetails.call(obj2, "India", "MI");     // Rohit Sharma plays for India and MI


// apply()

// In apply(), we pass the additional parameters as object instead of separate values

// If I pass an array of params in call(), it takes the array as first param and rest are undefined.
//printDetails.call(obj1, ["India", "RCB"]);  // Virat Kohli plays for India,RCB and undefined
//printDetails.call(obj2, ["India", "MI"]);   // Rohit Sharma plays for India,MI and undefined

// If I pass comma-separated params instead of array in apply(), it throws "TypeError: CreateListFromArrayLike called on non-object" error.

printDetails.apply(obj1, ["India", "RCB"]);    // Virat Kohli plays for India and RCB
printDetails.apply(obj2, ["India", "MI"]);     // Rohit Sharma plays for India and MI


// bind()

// bind() is used to return a new function with a certain context to be invoked later.

const vkPrintDetails = printDetails.bind(obj1, "India", "RCB");     
vkPrintDetails();       // Virat Kohli plays for India and RCB

const rsPrintDetails = printDetails.bind(obj2, "India", "MI");
rsPrintDetails();       // Rohit Sharma plays for India and MI



