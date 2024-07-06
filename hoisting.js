getName();      // Function definition gets stored in the memory execution phase when the execution context is created prior to the code execution phase.
console.log(x);    // Since variable is declared below, it is stored as undefined in memory until it is assigned a value.
console.log(getName);   // This prints the function definition itself even though it is created after this line.
//console.log(y);     // Since y is not even declared, it returns ReferenceError as y is not defined since y does not exist in memory.
var x = 7;
function getName() {
    console.log("Name");
}

console.log(name);      // Since the function is assigned to a variable, it is stored as undefined in memory.
//name();                 // This gives TypeError which says name is not a function, as name is a variable which is stored as undefined before initialization and here we are trying to invoke it as a function.
var name = function getName1() {
    console.log("Name 1");
}
name();         // This prints Name 1, now that we have the name assigned to a function.