const url = `https://data.opendatasoft.com/api/records/1.0/search/?dataset=grands-documents-et-images-de-lhistoire-de-france-conserves-par-les-archives-%40culture&q=&rows=423&facet=date&facet=support`;
async function getFrenchHistoricalFacts() {
  const result = await fetch(url);
  result.json().then(json => {
  console.log(json);
  document.getElementById("historic_Photo").src = json.records.fields.image; //photo
  document.getElementById("title_Date_Historic_Photo").innerHTML = json.records.fields.titre_du_document + "" + json.records.fields.date_du_document; //titre + date
  document.getElementById("description_Historic_Photo").innerHTML = json.records.fields.description_du_document; //description
  })   
}
getFrenchHistoricalFacts();


//Génère un entier aléatoire pour proposer un ID d'oeuvre
// function entierAleatoire(min, max)
// { return Math.floor(Math.random() * (max - min + 1)) + min;}
// var entier = entierAleatoire(1, 471581);


async function getArt() {
    while (true) {
      let id = Math.floor(Math.random() * 50000) + 1;
      const url2 = "https://collectionapi.metmuseum.org/public/collection/v1/objects/" + id;
      const result = await fetch(url2);
      const json = await result.json();
      if (json.primaryImage) {
        console.log(json);
        document.getElementById("artTitle").innerHTML = json.title;
        document.getElementById("art").innerHTML = json.artistDisplayName + " " + json.period;
        document.getElementById("displayPhoto2").src = json.primaryImage;
        break;
      }
    }
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
