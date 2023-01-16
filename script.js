const url = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "16cf5c6822msh8187abb91aed8eep1407e5jsn11e70d0fa6ba",
    "X-RapidAPI-Host": "imdb-top-100-movies.p.rapidapi.com",
  },
};

const getCinema = async () => {
  const response = await fetch(
    "https://imdb-top-100-movies.p.rapidapi.com/",
    url
  );
  const data = await response.json();
  console.log(data);
  document.getElementById("getcinema_Photo").src = data[0].image;
  document.getElementById("getcinema_Title").innerHTML = data[0].genre.title + " " + data[0].year;
  document.getElementById("getcinema_Synopsis").innerHTML = data[0].description;
};

function bookmarkSelected3(){
  console.log("Bookmark number 3 has been selected ( ﾉ ﾟｰﾟ)ﾉ");
  //createBookmark3()
}

document.getElementById("buttonBookmark3").addEventListener("click", bookmarkSelected3);

//getCinema();

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
  function bookmarkSelected1(){
    console.log("bookmark Number 1 has been selected ヾ(⌐■_■)ノ♪");
    //createBookmark1()
  }
  
  document.getElementById("buttonBookmark1").addEventListener("click", bookmarkSelected1);
}
getArt();

//Génère un entier aléatoire 
function entierAleatoire(min, max)
{ return Math.floor(Math.random() * (max - min + 1)) + min;}
var entier = entierAleatoire(0, 29);
console.log("test", entier)

let tabImg = [
  "photosHistoriques/1.png",
  "photosHistoriques/2.png",
  "photosHistoriques/3.png",
  "photosHistoriques/4.png",
  "photosHistoriques/5.png",
  "photosHistoriques/6.png",
  "photosHistoriques/7.png",
  "photosHistoriques/8.png",
  "photosHistoriques/9.png",
  "photosHistoriques/10.png", 
  "photosHistoriques/11.png",
  "photosHistoriques/12.png",
  "photosHistoriques/13.png",
  "photosHistoriques/14.png",
  "photosHistoriques/15.png", 
  "photosHistoriques/16.png",
  "photosHistoriques/17.png",
  "photosHistoriques/18.png",
  "photosHistoriques/19.png",
  "photosHistoriques/20.png",
  "photosHistoriques/21.png",
  "photosHistoriques/22.png",
  "photosHistoriques/23.png",
  "photosHistoriques/24.png",
  "photosHistoriques/25.png",
  "photosHistoriques/26.png",
  "photosHistoriques/27.png",
  "photosHistoriques/28.png",
  "photosHistoriques/29.png",
  "photosHistoriques/30.png"
]
let tabLegende = [
  "Steven Spielberg et George Lucas en pleine bataille de pistolets à eau en 1983",
  "Un seul homme refuse de faire le salut nazi en 1936",
  "La tombe scellée de Toutankhamon en 1922",
  "La première usine Harley-Davidson en 1903",
  "La première édition de Woodstock en 1969",
  "Elvis en 1956",
  "Obama et son équipe de basket à l'école secondaire",
  "Arnold Schwarzenegger découvre pour la première fois les Etats-Unis en 1968",
  "Le Titanic quittant Southampton en 1912",
  "Times Square, 1945",
  "Fidel Castro et Che Guevarra en pleine partie de pêche en 1960",
  "Tournage du générique MGM en 1928",
  "Machine pour soigner les tâches de rousseur dans les années 30",
  "Des animaux étaient utilisés pour certaines thérapies en 1956",
  "Des peintres sur le pont de Brooklyn en 1914",
  "Des nouvelles chaussures durant la Seconde Guerre mondiale",
  "Des peintres sur la Tour Eiffel en 1932",
  "Pause déjeuner pour les employés de Disneyland, 1961",
  "Une petite fille et sa poupée au milieu des décombres des bombardements sur Londres en 1940",
  "Débarquement en Normandie",
  "Un masque à gaz sur un cheval durant la Seconde Guerre mondiale",
  "Un concert des Beatles en 1961, avant leur succès",
  "Charlie Chaplin à l'âge de 27 ans",
  "Le naufrage du Titanic fait la une des journaux en 1912",
  "Un homme fait du bouche-à-bouche à son collègue qui vient de se faire électrocuter",
  "Einstein à New York en 1939",
  "Les essais électriques de Nikola Tesla",
  "La dernière photo du Titanic, 1912",
  "Une cage pour faire prendre l'air et le soleil aux enfants, 1937",
  "Ouverture de l'Empire State Building en 1931",
]
document.getElementById("historyImages").src=tabImg[entier];
document.getElementById("legendImage").innerHTML=tabLegende[entier];

function bookmarkSelected2(){
  console.log("Bookmark number 2 has been selected (づ￣ 3￣)づ");
  //createBookmark2()
}

document.getElementById("buttonBookmark2").addEventListener("click", bookmarkSelected2);

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


        function createBookmark4(){
          chrome.bookmarks.create({
            'title' : myDescription ,
            'url' : myLink
          },
          function(newBookmark){
            console.log("added bookmark: " + newBookmark.title )
          }
        )
        }
        function bookmarkSelected4(){
          console.log("Bookmark number 4 has been selected ヾ(＠⌒ー⌒＠)ノ");
          //createBookmark4()
        }
        
        document.getElementById("buttonBookmark4").addEventListener("click", bookmarkSelected4);
    }
    )

// Bookmark system

// test des boutons





/* //create a bookmark forlder. Be warned, it creates a new one with the same name eveytime it is called upon
chrome.bookmarks.create(
  {'title' : 'Bookmarks Forlder'},
  function(newFolder) {
    console.log("added folder: " + newFolder.title);
  },
) */

/* // create a bookmark
chrome.bookmarks.create({
    'title' : 'SteamCode Youtube',
    'url' : 'https://www.youtube.com/watch?v=SahfSL6IwQk'
  },
  function(newBookmark){
    console.log("added bookmark: " + newBookmark.title )
  }
) */