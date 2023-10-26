import ExternalServices from "./ExternalServices.mjs";
import { getLocalStorage, setLocalStorage, loadHeaderFooter } from "./utils.mjs";

loadHeaderFooter();

const data = new ExternalServices();

function dogTemplate(dog) {
    return `<h3>${dog.name}</h3>
            <img src="${dog.image_link}" alt="${dog.name}"/>
            <button id="fav-button">♡</button>`;

}



async function addToFav() {
    const dog = await data.finDogByCompleteName();

    let favDogs = getLocalStorage("fav-dogs");

    if (!favDogs) {
        favDogs = [];
    }

    setLocalStorage("fav-dogs", dog);
}

async function renderDog() {
    const dogData = await data.finDogByCompleteName();
    document.querySelector("#dog-container").innerHTML = "";
    document.querySelector("#dog-container").innerHTML = dogTemplate(dogData);

    document.getElementById("fav-button").addEventListener("click", addToFav.bind(this));
}

renderDog();
