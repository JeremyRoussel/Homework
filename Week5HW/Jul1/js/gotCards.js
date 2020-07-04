function makeCard(dictionary){
    // Function to make a card from a single dictionary
    // Expected input has the form: 
    // {
    //    state: "New York",
    //    updated: 1593055009714,
    //    cases: 413355,
    //    todayCases: 0,
    //    deaths: 31346,
    //    todayDeaths: 0,
    //    active: 294660,
    //    casesPerOneMillion: 21248,
    //    deathsPerOneMillion: 1611,
    //    tests: 3552126,
    //    testsPerOneMillion: 182595
    //},

    var divCol = document.createElement('div')
    divCol.setAttribute('class', 'col-3 mt-5')

    var divCard = document.createElement('div')
    divCard.setAttribute('class', 'card')
    divCard.setAttribute('width', '18rem')

    var divCardBody = document.createElement('div')
    divCardBody.setAttribute('class', 'card-body')

    var cardTitle = document.createElement('h5')
    cardTitle.setAttribute('class', 'card-title')
    cardTitle.innerText = dictionary.state

    var cardCases = document.createElement('h6')
    cardCases.setAttribute('class', 'card-subtitle mb-2 text-muted')
    cardCases.innerText = dictionary.cases + "   Cases"
    
    var cardDeaths = document.createElement('h6')
    cardDeaths.setAttribute('class', 'card-subtitle mb-2 text-muted')
    cardDeaths.innerText = dictionary.deaths + "   Deaths"
   
    var cardDPOM = document.createElement('h6')
    cardDPOM.setAttribute('class', 'card-subtitle mb-2 text-muted')
    cardDPOM.innerText = dictionary.deathsPerOneMillion + "   Deaths per 1 Million"

    

    divCol.appendChild(divCard)
    divCard.appendChild(divCardBody)
    divCardBody.appendChild(cardTitle)
    divCardBody.appendChild(cardCases)
    divCardBody.appendChild(cardDeaths)
    divCardBody.appendChild(cardDPOM)


    return divCol

}