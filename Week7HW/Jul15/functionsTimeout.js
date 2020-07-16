let add = function (x, y) {
    // console.log(x+y);
    return x+y;
}
 
let subtract = function (x, y) {
    // console.log(x-y);
    return x-y;
}
 
function greeting(person) {
    console.log('Hola, ' + person + '!');
    return 'Hola, ' + person + '!';
}
 
function product(numbers) {
    let z = numbers.reduce(function(a, b) {
       return a * b;
    }, 1)
    console.log(z);
} 

const cbAorS = (x, y, fun) => {

    setTimeout(() => {
        console.log(fun(x, y))
    },1000);

     return;
}

const greetPerson = (name, fun) => {
    setTimeout(fun, 2000, [name]) 
    return;
}

const multNumList = (numsList, fun) => {
    setTimeout(fun, 3000, [...numsList])
    return;
}

cbAorS(5,10, add)
cbAorS(5,10, subtract)

greetPerson('Jeremy', greeting)

multNumList([5,10,-1], product)

