const fs = require('fs');
const request = require('request');

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });


readline.question('URL to save?: ', url => {
  readline.question('File to write to?: ', writeFile => {
    
    
    
    request.get(url, function (error, response, html) {
      if (error) {
        console.error(error.message);
        return;
      }

      fs.writeFile(writeFile, html, (error) => {
        if (error){
          console.error(error.message);
          console.log(`No file ${writeFile} to write to!`);
          return;
        }
        console.log('File Saved: ', writeFile);
      })
      // console.log(html);
    });



    readline.close();
    
  })  
  

});