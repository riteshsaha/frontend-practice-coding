function x1() {
    var i = 1;
    setTimeout(function () {
        console.log(i);
    }, i * 1000);
    console.log("Testing closures with setTimeout");
}
x1();   // 1

function x2() {
    for (var i = 1; i < 6; i++) {
        setTimeout(function () {
            console.log(i);
        }, i * 2000);
    }
    console.log("Testing closures with setTimeout and loop");
}
//x2();     // 6 6 6 6 6 after 2 seconds each

function x3() {
    for (let i = 1; i < 6; i++) {
        setTimeout(function () {
            console.log(i);
        }, i * 2000);
    }
    console.log("Testing closures with setTimeout,loop and let");
}
//x4();   // 1 2 3 4 5 each after 2 seconds each as let is block scoped and stores a copy separately for each function in memory.


function x4() {
    for (var i = 1; i < 6; i++) {
        function close(i) {
                    setTimeout(function () {
                        console.log(i);
                    }, i * 2000); 
        }
        close(i);
    }
    console.log("Testing closures with setTimeout,loop and function");
}
x4();   // 1 2 3 4 5 each after 2 seconds each as each iteration creates separate copies of function close() in memory.