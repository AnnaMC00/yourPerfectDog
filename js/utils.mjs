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