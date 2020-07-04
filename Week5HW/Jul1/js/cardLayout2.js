
function makeCard(dictionary){
    // Function to make a card from a single dictionary
    // Expected input has the form: 
   
    // 	"name": "Jon Snow",
  
    // 	"allegiances": [
    // 		"https://anapioficeandfire.com/api/houses/362"
   

    var divCol = document.createElement('div')
    divCol.setAttribute('class', 'col-3 mt-5')

    var divCard = document.createElement('div')
    divCard.setAttribute('class', 'card')
    divCard.setAttribute('width', '18rem')

    var divCardBody = document.createElement('div')
    divCardBody.setAttribute('class', 'card-body')

    var cardName = document.createElement('h5')
    cardName.setAttribute('class', 'card-title')
    cardName.innerText = dictionary.name

    var cardHouse = document.createElement('h6')
    cardHouse.setAttribute('class', 'card-subtitle mb-2 text-muted')
    cardHouse.innerText = dictionary.allegiances
    // cardHouse.innerText = buttonList

    divCol.appendChild(divCard)
    divCard.appendChild(divCardBody)
    divCardBody.appendChild(cardName)
    divCardBody.appendChild(cardHouse)


    return divCol
    


}
