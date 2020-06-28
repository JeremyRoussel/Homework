var numList = [-30, 52, 17, -9, 22, -7, 0, 100, 71, -19]

//Postive Numbers

var posNumList = numList.filter(num => num > 0)

console.log("\nPositive Numbers");
console.log(posNumList);

// Even Numbers

var evenNumList = numList.filter(num => num%2 == 0)

console.log("\nEven Numbers");
console.log(evenNumList);

// Square the Numbers

var squaredNumList = numList.map(num => num*num)

console.log("\nSquared Numbers");
console.log(squaredNumList);

// Cities 1

var cities = [
    { name: 'Los Angeles', temperature: 60.0},
    { name: 'Atlanta', temperature: 52.0 },
    { name: 'Detroit', temperature: 48.0 },
    { name: 'New York', temperature: 80.0 } ];

var coolCities = cities.filter(dictionary => dictionary.temperature < 70 )

console.log("\nCool Cities");
console.log(coolCities);

// Cities 2

var cityNames = cities.map(function(dictionary){
    return dictionary.name
})

console.log("\nCity Names");
console.log(cityNames);

// Good Job!

var people = ['Dom', 'Lyn', 'Kirk', 'Autumn', 'Trista', 'Jeslyn', 'Kevin', 'John', 'Eli', 'Juan', 'Robert', 'Keyur', 'Jason', 'Che', 'Ben'];


console.log("\nAttaboys\n");
people.forEach(el => console.log(`Good Job, ${el}!`));

// Sort an Array by alphabet

var sortedPeople = people.sort((a,b) => a > b ? 1:-1);

console.log("\nSorted People\n");
console.log(sortedPeople);

// Sort Names by Length

var lenSortedPeople = people.sort(function(a,b){
    return a.length - b.length || a.localeCompare(b)
})

console.log("\n Length Sorted People\n");
console.log(lenSortedPeople);

// Sort Arrays by Sum

var arr = [
    [1, 3, 4],
    [2, 4, 6, 8],
    [3, 6] ];

var sortedArr = arr.sort(function(a,b){
    return a.reduce((a,b) => a + b) - b.reduce((a,b) => a + b)
})

console.log("\n Sum Sorted Arays\n");
console.log(sortedArr);

// 3 Times

function call3Times(fun) { fun(); fun(); fun()}

function helloWorld(){
    console.log("Hello, World!");
}

console.log("\n Call 3 Times\n");
call3Times(helloWorld)

// N times

function callNTimes(num, fun){
    for (let i = 0; i < num; i++) {
        fun()
    }
}

console.log("\n Call N Times (5)");
callNTimes(5, helloWorld)

// Sum an Array

function sumArray(arr){
    return arr.reduce((a,b) => a + b)
}

var sumNumList = sumArray(numList)

console.log("\n Sum an Array\n");
console.log(sumNumList);

// Acronym?? Not if I have anything to say about it
// THIS IS AN INITIALISM

function initial(string){
    arr = string.split("")
    result = arr.reduce((a,b) => a)
    capResult = result.toUpperCase()
    return capResult
}

function initialism(stringList){
    var initialismObject = "";
    stringList.forEach(string => initialismObject += initial(string))
    return initialismObject
}

var VIP = ['very', 'important', 'person']
var NASA = ['national', 'aeronatics', 'space', 'administration']

console.log("\n Initialisms\n");
console.log(initialism(VIP));
console.log(initialism(NASA));

// Make your own forEach

var arr = [
    { name: 'Bob' },
    { name:'Alice' },
    { name:'Joe' } ];

function eachOne(arr, func){
    for (let index = 0; index < arr.length; index++) {
        func(arr[index])
    }
}

function printNames(dictionary){
    console.log('Hello, ' + dictionary.name + '!');
}

console.log("\nMake Your Own forEach Function");
eachOne(arr, printNames)

// Make your own map Function

var arr2 = [
    { name: 'Bob' },
    { name:'Alice' },
    { name:'Joe' } ];

function nameMap(arr, func){
    for (let index = 0; index < arr.length; index++) {
        func(arr[index])
    }
}

function addLastName(dictionary){
    dictionary.name += ' LastName'
}

nameMap(arr2, addLastName)

console.log("\nMake Your Own map Function");
console.log(arr2);

// Ceasar Cipher

var alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

function createCipher(num){
    var slice1 = alpha.slice(26-num%26)
    var slice2 = alpha.slice(0,26-num%26)
    var cipher = slice1.concat(slice2)
    return cipher
}

function encrypt(text, num){
    var message = text.toUpperCase().split('')
    var key = createCipher(num)
    var encrypted = ""
    message.forEach(letter => encrypted += key[alpha.indexOf(letter)])
    return encrypted
}

var encrypted = encrypt('GENIUS', 13)

console.log("\nCeasar Cipher (GENIUS, 13)");
console.log(encrypted);