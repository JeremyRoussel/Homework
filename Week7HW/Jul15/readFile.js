const fs = require('fs')

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
readline.question('File to open?: ', file => {
    
    fs.readFile(file, (error, buffer) => {
       if (error) {
        //    console.error(error.message);
           console.log(`No file named ${file} to open`);
           return;
        }
        let z = buffer.toString().toUpperCase()
        console.log(z);
    })
    readline.close();
});