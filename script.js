
const url = `https://dog.ceo/api/breeds/image/random`;
async function getDogPhoto() {
    const result = await fetch(url);
    result.json().then(json => {
    console.log(json.message);
    document.getElementById("displayPhoto").src = json.message
    })   
}
getDogPhoto();

// document.getElementById("displayPhoto").innerHTML = json.message .value


//Génère un entier aléatoire pour proposer un ID d'oeuvre
function entierAleatoire(min, max)
{ return Math.floor(Math.random() * (max - min + 1)) + min;}
var entier = entierAleatoire(1, 471581);




const url2 = "https://collectionapi.metmuseum.org/public/collection/v1/objects/"+ entier;
async function getArt(){
    const result = await fetch(url2);
    result.json().then(json => {
        console.log(json);
        document.getElementById("art").innerHTML = json.title + " " + json.artistDisplayName + " " + json.period;
        document.getElementById("displayPhoto2").src = json.primaryImage;
    }

    )
}
getArt();


// History Fact fetch by Driss
fetch('http://history.muffinlabs.com/date')
    .then(response => response.json())
    .then(response => {
        // Je séléctionne un évènement de naissance aléatoirement
        console.log(response.data.Births.length)
        let historyArrayLength = response.data.Births.length - 1
        console.log(historyArrayLength)
        let EventID = getRandomInt(historyArrayLength)
        // J'extrait le texte de cet évènement
        let eventDescription = document.createElement('p');
        const myDescription = response.data.Births[EventID].text
        eventDescription.innerText = myDescription
        document.getElementById('history').appendChild(eventDescription);
        // J'extrait l'année de l'évènement 
        let eventYear = document.createElement('p');
        const myEventYear = response.data.Births[EventID].year
        eventYear.innerText = myEventYear
        document.getElementById('history').appendChild(eventYear);
    }
    )