import ExternalServices from "./ExternalServices.mjs";
import { renderListWithTemplate } from "./utils.mjs";

// let alphabet = 'abcdefghijklmnopqrstuvwxyz';]

function dogCardTemplate(dog) {
    return `<li class="dog-card">
                <a href="#">
                    <img src="${dog.image_link}" alt="${dog.name}"/>
                    <h3>${dog.name}</h3>
                </a>
            </li>`
}


const dataSource = new ExternalServices();
const filter = [
    ["name", "a"],
    ["barking", "2"]
];

async function renderDogs(dataSource, filter) {
    const main = document.querySelector("main");
    const doglist = await dataSource.getData(filter);

    renderListWithTemplate(dogCardTemplate, main, doglist)

}

renderDogs(dataSource, filter);