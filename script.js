const url = `https://data.opendatasoft.com/api/records/1.0/search/?dataset=grands-documents-et-images-de-lhistoire-de-france-conserves-par-les-archives-%40culture&q=&rows=423&facet=date&facet=support`;
async function getFrenchHistoricalFacts() {
  const result = await fetch(url);
  result.json().then((json) => {
    console.log("test", json.records[3].fields.image.filename);
    console.log("source", json.records[3].fields.source);
    document.getElementById("historic_Photo").src = json.records[0].fields.image.filename; //photo
    document.getElementById("title_Date_Historic_Photo").innerHTML = json.records[5].fields.titre_du_document + " // " + json.records[5].fields.date_du_document;  //titre + date
    document.getElementById("description_Historic_Photo").innerHTML = json.records[5].fields.description_du_document; //description
  });
}
getFrenchHistoricalFacts();

//Génère un entier aléatoire pour proposer un ID d'oeuvre
// function entierAleatoire(min, max)
// { return Math.floor(Math.random() * (max - min + 1)) + min;}
// var entier = entierAleatoire(1, 471581);

// fetch de l'API du Met
async function getArt() {
  while (true) {
    let id = Math.floor(Math.random() * 50000) + 1; 
    const url2 =
      "https://collectionapi.metmuseum.org/public/collection/v1/objects/" + id;
    const result = await fetch(url2);
    const json = await result.json();
    if (json.primaryImage) {
      console.log(json);
      document.getElementById("artTitle").innerHTML = json.title;
      document.getElementById("art").innerHTML =
        json.artistDisplayName + " " + json.period;
      document.getElementById("displayPhoto2").src = json.primaryImage;
      break;
    }
  }
}
getArt();

// fetch API photo
async function getPhoto() {
  const url3 =
    "https://api.dp.la/v2/items?sourceResource.spatial.country=france&api_key=a880ef1d4315fa4283a5300b55cd3b44";
  const result = await fetch(url3, { mode: "no-cors" });
  result.json().then((json) => {
    console.log(json, "test");
    document.getElementById("displayPhoto2").src = json;
  });
}
getPhoto();

// Driss - J'utilise une API pour récupérer des informations historiques sur la base "ce jour en année X il s'est passé ça"

// Problème aditionnel : pour d'obscure raisons mes appel API reste bloqués au résultats du 10/01 (cad quand j'ai commencé à coder cet appel d'API). Alors même que copier manuellement, l'adresse permet bien http://history.muffinlabs.com/date d'obtenir le resultats du jour même. Pour l'instant, le workaround est de préciser soit même la date en ajoutant /mois/jour sur le modèle /1/11 pour le 11 janvier. Si le problème persiste je vais coder JS pour qu'il détecte lui même la date et précise la date dans l'addresse à fetcher.

// Mon workaround pour résoudre ce problème de date : Je demande à JS de détecter la date actuelle. Puis j'ajoute ces informations à l'URL de base afin de faire le bon fetch API et récupérer les données que je souhaite.

const date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1;

let basicURL = "http://history.muffinlabs.com/date/";

let myURL = basicURL + month + "/" + day;

// Une fonction pour obtenir un nombre entier(floor) maximum. Je l'utilise plus tard pour choisir une personnalité aléatoirement.

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

// Le code qui appel l'API et restitue les données que je souhaite.

fetch(myURL)
    .then(response => response.json())
    .then(response => {
        // Je séléctionne un évènement de naissance aléatoirement
        let historyArrayLength = response.data.Births.length - 1
        let EventID = getRandomInt(historyArrayLength)
        // J'extrait l'année de l'évènement 
        let eventYear = document.createElement('p');
        const myEventYear = response.data.Births[EventID].year
        eventYear.innerText = myEventYear
        document.getElementById('history').appendChild(eventYear);
        // J'extrait le texte de cet évènement
        let eventDescription = document.createElement('p');
        const myDescription = response.data.Births[EventID].text
        eventDescription.innerText = myDescription
        document.getElementById('history').appendChild(eventDescription);
        // J'ajoute le lien wikipedia
        let eventLink= document.createElement('a');
        let myLink = response.data.Births[EventID].links[0].link
        eventLink.href = myLink
        eventLink.target="_blank"
        eventLink.innerText = "Learn more about this person ✍️(◔◡◔)"
        document.getElementById('history').appendChild(eventLink)
    }
    )
