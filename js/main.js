import ExternalServices from "./ExternalServices.mjs";
import { renderListWithTemplate, loadHeaderFooter } from "./utils.mjs";
import FilterFormController from "./FilterFormController.mjs";

loadHeaderFooter();

function dogCardTemplate(dog) {
    return `<li class="dog-card">
                <a href="dog-page/index.html?name=${dog.name}">
                    <h3>${dog.name}</h3>
                    <img src="${dog.image_link}" alt="${dog.name}"/>
                </a>
            </li>`
}


const dataSource = new ExternalServices();
const filterController = new FilterFormController();

// document.querySelector("#search").addEventListener("click", (e) => {
//     const myForm = document.forms[0];
//     console.log(myForm[2].name);
//     console.log(myForm[2].value);
//     console.log(myForm.length)
//     console.log([myForm[2].name, myForm[2].value])
// })

document.querySelector("#search").addEventListener("click", () => {
    filterController.init();
    const filters = filterController.filtersList;
    renderDogs(dataSource, filters);
})




async function renderDogs(dataSource, filter) {
    const section = document.querySelector("#dogs");
    section.innerHTML = "";
    const doglist = await dataSource.getData(filter);

    renderListWithTemplate(dogCardTemplate, section, doglist)
}

// falta arreglar que no se muestren resultados hasta despues de aplicar
// el primer filtro
// VAMOS BIEN!!!!!!!!!!!! 