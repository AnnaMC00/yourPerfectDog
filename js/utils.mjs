export function renderListWithTemplate(templateFn, parentElement, list, position = "afterbegin", clear = false) {
    const htmlStrings = list.map(templateFn);
    if (clear) {
        parentElement.innerHTML = "";
    }
    parentElement.insertAdjacentHTML(position, htmlStrings.join(""));
}