
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
