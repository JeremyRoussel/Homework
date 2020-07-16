function add(x, y) {
    var result = x + y;
    return result;
}
 
function subtract(x, y) {
    return x - y;
}
 
function greeting(person) {
    return 'Hola, ' + person + '!';
}
 
function product(numbers) {
    return numbers.reduce(function(a, b) {
       return a * b;
    }, 1);
} 

const cbAorS = (x, y, fun) => {
     return fun(x,y)
}

const greetPerson = (name, fun) => {
     return fun(name)
}

const multNumList = (numsList, fun) => {
     return product(numsList)
     
}

console.log(cbAorS(5,10, add))
console.log(cbAorS(5,10, subtract))

console.log(greetPerson('Jeremy', greeting));

console.log(multNumList([5,10,-1], product));

