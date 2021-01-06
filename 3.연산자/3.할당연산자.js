
var x = 10;

x += 5;
x -= 3;
x *= 2;

x /= 4;     //x:?  6
x %= 4;     //x:?  2
x **= 3;    //x:?  8 
console.log(`x: ${x}`);

var a = 5;
a += 1;     //a:6
//a++;      //a: 6

a =+ 10;    //a = +10
console.log(`a: ${a}`);