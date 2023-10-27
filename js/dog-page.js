import ExternalServices from "./ExternalServices.mjs";
import { getLocalStorage, setLocalStorage, loadHeaderFooter } from "./utils.mjs";

loadHeaderFooter();

const data = new ExternalServices();

function dogTemplate(dog) {
    return `<div><img src="${dog.image_link}" alt="${dog.name}"/></div>
            <div><h2>${dog.name}<button id="fav-button"><i class='bx bx-heart'></i></button><br></h2>
            <p>Energy Level: <span>${dog.energy}</span></p>
            <p>Barking Level: <span>${dog.barking}</span></p>
            <p>Shedding Level: <span>${dog.shedding}</span></p>
            <p>Trainability Level: <span>${dog.trainability}</span></p></div>`;

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

    const title = document.querySelector("title");
    title.textContent = dogData.name + title.textContent;

    document.getElementById("fav-button").addEventListener("click", addToFav.bind(this))

    document.getElementById("fav-button").addEventListener("click", () => {
        document.querySelector(".bx-heart").classList.replace('bx-heart', 'bxs-heart')
    });
}

renderDog();
