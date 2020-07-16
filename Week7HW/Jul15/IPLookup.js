const dns = require('dns')

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
readline.question('Website to lookup?: ', site => {
  
  dns.lookup(site, (error, address, family) => {
    if (error){
      console.error(error.message);
    }
    console.log(`IP address: ${address}`)
  })
  
  readline.close();

});