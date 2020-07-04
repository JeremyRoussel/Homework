const fetch = require('node-fetch');

const fetchString = 'https://anapioficeandfire.com/api/characters/'

class Card {
    constructor(dictionary) {
        this.name = dictionary.name
        this.allegiances = dictionary.allegiances
        this.houses = []
        this.houseURLS = []
    }
}

async function createCharCard(fetchString) {

    const res = await fetch(fetchString);

    const data = await res.json();

    var card = new Card(data)

    card.houseURLS = card.allegiances.split(',')
}





fetch(fetchString)
    .then(data => data.json())
    .then(data => {
        // console.log(data);
        return data
    })
    .then(data => {
        jsonfile.writeFile(file, data, function (err) {
            if (err) console.error(err)
          })
    })
    // .then(json => dataObj.table.push(json))
    // .then(console.log(dataObj.table))
    .catch(err => console.error(err))



// console.log(table);


