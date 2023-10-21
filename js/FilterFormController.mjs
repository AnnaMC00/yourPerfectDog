export default class FilterFormController {
    constructor() {
        this.form;
        this.filtersList = [];
    }

    init() {
        this.form = document.forms[0];
        this.buildFiltersList();
    }

    buildFiltersList() {
        this.filtersList = [];
        for (let i = 0; i < 5; i++) {
            this.filtersList.push([this.form[i].name, this.form[i].value]);
        }
    }
}