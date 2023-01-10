
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




// const url2 = "https://collectionapi.metmuseum.org/public/collection/v1/objects/"+ entier;
// async function getArt(){
//     const result = await fetch(url2);
//     result.json().then(json => {
//         console.log(json);
//         document.getElementById("art").innerHTML = json.title + " " + json.artistDisplayName + " " + json.period;
//         document.getElementById("displayPhoto2").src = json.primaryImage;
//     }

//     )
// }
// getArt();