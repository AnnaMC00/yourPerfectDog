import { getLocalStorage, loadHeaderFooter } from "./utils.mjs";

loadHeaderFooter();

function favDogTemplate(dog) {
  const newDog = `<li>
    <a href="/yourPerfectDog/dog-page/index.html?name=${dog.name}">
      <img src="${dog.image_link}" alt="${dog.name}"/>
      <h3>${dog.name}</h3>
    </a>
  </li>`;
  return newDog;
}

function renderFavDogsContent() {
  const dogList = getLocalStorage("fav-dogs");
  const htmlItems = dogList.map((dog) => favDogTemplate(dog));
  document.querySelector("#fav-dogs-container").innerHTML = htmlItems.join("");
}

renderFavDogsContent();