import { buildURL } from "./utils.mjs";
import { getParams } from "./utils.mjs";

const baseURL = "https://api.api-ninjas.com/v1/dogs?";

async function convertToJson(res) {
    const response = await res.json();
    if (res.ok) {
        return response;
    } else {
        throw { name: "servicesError", message: response };
    }
}

export default class ExternalServices {
    constructor() {
        this.data;
    }

    async getData(filter) {
        this.data = [];
        const newURL = buildURL(baseURL, filter);

        // const newURL = baseURL + `${filter[0][0]}=${filter[0][1]}`;
        const response = await fetch(newURL, {
            method: 'GET',
            headers: { 'X-Api-Key': 'q8Y7sxRHFhePtiyCUwTvBQ==g4yy9poZ6qrYNrsV' },
            contentType: 'application/json'
        });
        console.log(response);
        this.data = await convertToJson(response);
        console.log(this.data)
        return this.data;
    }

    async finDogByCompleteName() {
        const dogName = getParams("name");
        const response = await fetch(baseURL + `name=${dogName}`, {
            method: 'GET',
            headers: { 'X-Api-Key': 'q8Y7sxRHFhePtiyCUwTvBQ==g4yy9poZ6qrYNrsV' },
            contentType: 'application/json'
        });
        const data = await convertToJson(response);
        console.log(data);
        return data[0];
    }
}