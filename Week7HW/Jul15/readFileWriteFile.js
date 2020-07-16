const fs = require('fs')

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });


readline.question('File to open?: ', file => {
  readline.question('File to write to?: ', writeFile => {
    fs.readFile(file, (error, buffer) => {

       if (error) {
        //    console.error(error.message);
           console.log(`No file named ${file} to open`);
           return;
        }
        const z = buffer.toString().toUpperCase()
        // console.log(z);

        fs.writeFile(writeFile, z, (error) => {
          if (error){
            console.error(error.message);
            console.log(`No file ${writeFile} to write to!`);
            return;
          }
          console.log('File Saved: ', writeFile);
        })

    })

    
    readline.close();
  })
    
    
});