export function renderListWithTemplate(templateFn, parentElement, list, position = "afterbegin", clear = false) {
    const htmlStrings = list.map(templateFn);
    if (clear) {
        parentElement.innerHTML = "";
    }
    parentElement.insertAdjacentHTML(position, htmlStrings.join(""));
}

export function buildURL(baseURL, filtersList) {
    const URLstrings = filtersList.map((x) => {
        return `${x[0]}=${x[1]}`
    });

    const filters = URLstrings.join("&");
    // console.log(newURL);
    return `${baseURL}${filters}`
}

export function getParams(param) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const product = urlParams.get(param)

    return product;
}

export function getLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
}

export function setLocalStorage(key, data) {
    let dataArray = getLocalStorage(key) || [];
    dataArray.push(data);
    localStorage.setItem(key, JSON.stringify(dataArray));
}

function renderWithTemplate(template, parentElement) {
    parentElement.insertAdjacentHTML("afterbegin", template);
}

export async function loadTemplate(path) {
    const template = await fetch(path).then(res => res.text());
    return template;
}

export async function loadHeaderFooter() {
    const headerTemplate = await loadTemplate("/yourPerfectDog/partials/header.html");
    const footerTemplate = await loadTemplate("/yourPerfectDog/partials/footer.html");
    const headerElement = document.getElementById("main-header");
    const footerElement = document.getElementById("main-footer");
    renderWithTemplate(headerTemplate, headerElement);
    renderWithTemplate(footerTemplate, footerElement);
}