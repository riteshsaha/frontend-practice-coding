function x() {
    var a = 7;
    function y() {
        console.log(a);
    }
    return y;
}


var z = x();
console.log(x);
console.log(z); // value of z is entire code of function y.
z();    // 7




function z1() {
    var a = 10;
    function y1() {
        var b = 20;
        function x1() {
            console.log(a, b);
        }
        x1();
    }
    y1();
}

z1();
