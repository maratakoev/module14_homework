function sum(x) {
    return function(y) {
        return x + y;    
    };
}
let a = sum(5);
console.log( a(0), a(1), a(2) );
console.log( sum(1)(2), sum(2)(2), sum(40)(2) );

