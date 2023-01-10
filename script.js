
// const url = `https://dog.ceo/api/breeds/image/random`;
// async function getDogPhoto() {
//     const result = await fetch(url);
//     result.json().then(json => {
//     console.log(json.message);
//     document.getElementById("displayPhoto").src = json.message
//     })   
// }
// getDogPhoto();


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
