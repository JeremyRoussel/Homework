const { default: fetch } = require("node-fetch")

function makeHouseButtons(urlList){
    var buttonList = []
    urlList.forEach(el => {
        houseURL = el.toString()
        var houseName = fetch(houseURL)
            .then(resp => resp.json)
            .then(json => json.name)
        buttonList.append({houseName: houseURL})
    })
    return buttonList
}