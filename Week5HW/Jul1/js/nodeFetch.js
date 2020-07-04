const fetch = require('node-fetch');
// const jsonfile = require('jsonfile')
// var fs = require('fs')

const file = 'characters.json'
const obj = { name: "billy"}


var table = []
const fetchString = 'https://anapioficeandfire.com/api/characters/'

for (let i = 1; i < 11; i++) {
    let fetchURL = fetchString + i.toString()
    fetch(fetchURL)
        .then(data => data.json())                  // Returns JSON object of the character
        .then(data => {
            console.log(data);
            return data
        })                                          // Console the JSON object
        .then(json => table.push(json))             // Append the object to a list
        .then(console.log(table[i]))                // Console the list element
        .catch(err => console.error(err))
}