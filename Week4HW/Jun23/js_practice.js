console.log("\nMadlib", "\n");

function madlib(str1, str2) {
    return(str1+"'s favorite subject in school is "+str2+".");
}

console.log(madlib("Anushka", "art"));

console.log("\nTip Calculator", "\n");

function tipAmount(bill, service) {
    switch (service) {
        case "good":
            return (bill*.2).toFixed(2);
            break;
        case "fair":
            return (bill*.15).toFixed(2);
            break;
        case "bad":
            return (bill*.1).toFixed(2);
            break;
    
        default:
            break;
    }
}

console.log(tipAmount(105.28, 'good'));
console.log(tipAmount(40, 'fair'));

console.log("\nTip Calculator 2", "\n");

function totalAmount(bill, service) {
    var tip = tipAmount(bill, service)
    return (bill + tip)

}

console.log(totalAmount(100, 'good'));
console.log(totalAmount(40, 'fair'));

console.log("\nPrint Numbers For Loop, (1-10)", "\n");

for (let i = 1; i < 11; i++) {
    console.log(i);
}

console.log("\nPrint Numbers While Loop, (1-10)", "\n");

i = 1;
while (i < 11) {
    console.log(i);
    i++;    
}

console.log("\nPrint Square, (6)", "\n");

len = 6;

for (let i = 0; i < len; i++) {
    statement = ""
    for (let x = 0; x < len; x++) {
        statement += "*"
    }
    console.log(statement);
}

console.log("\nPrint Box, (6x4)", "\n");

width = 6;
height = 4;

for (let i = 1; i < height+1; i++) {
    statement = ""
    if (i == 1 || i == height){
        for (let x = 0; x < width; x++) {
            statement += "*"
        }
    }
    else{
        for (let x = 1; x < width+1; x++) {
            if (x == 1 || x == width){
                statement += "*"
            }
            else{
                statement += " "
            }
            
        }
    }
    
    console.log(statement);
}

console.log("\nPrint Banner", "\n");

function printBanner(text) {
    var bannerLength = text.length;
    statement = ""
    for (let index = 0; index < bannerLength+4; index++) {
        statement += "*" 
    }
    console.log(statement);
    console.log("* "+text+" *");
    console.log(statement);
}

printBanner('Welcome to DigitalCrafts')

console.log("\nLeetSpeak", "\n");

function leetSpeak(text) {
    var splitText = text.split('')
    
    for (const [index, element] of splitText.entries()){
        switch (element) {
            case "a":
                splitText[index] = '4'
                break;
            case "e":
                splitText[index] = '3' 
                break;
            case "g":
                splitText[index] = '6'
                break;
            case "i":
                splitText[index] = '1'
                break;
            case "o":
                splitText[index] = '0'
                break;
            case "s":
                splitText[index] = '5'
                break;
            case "t":
                splitText[index] = '7'
                break;
            default:
                break;
        }
    }

    var leeted = splitText.join("")

    return leeted
}

console.log("leet", leetSpeak('leet'));
console.log("digitalcrafts", leetSpeak('digitalcrafts'));

console.log("\nlong-Long", "\n");

function longLong(text) {
    var splitText = text.split('')
    
    for (const [index, element] of splitText.entries()){
        switch (element) {
            case "a":
                splitText[index] = 'aaaaa'
                break;
            case "e":
                splitText[index] = 'eeeee'
                break;
            case "i":
                splitText[index] = 'iiiii'
                break;
            case "o":
                splitText[index] = 'ooooo'
                break;
            default:
                break;
        }
    }

    var longed = splitText.join("")

    return longed
}

console.log("leet", longLong('leet'));
console.log("digitalcrafts", longLong('digitalcrafts'));

console.log("\nonlyPositive", "\n");


var myArray = [1, -3, 5, -3, 0]

function onlyPositive(numArray) {
    var posArray = []
    numArray.forEach(element => {
        if (element > 0){
            posArray.push(element)
        }
    });
    return posArray
}

console.log(onlyPositive(myArray));

