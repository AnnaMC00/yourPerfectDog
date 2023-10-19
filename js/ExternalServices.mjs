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
    async getData(filter) { //filter is a value
        const newURL = baseURL + `${filter[0][0]}=${filter[0][1]}`;
        // const newURL = baseURL + `name=a`
        const response = await fetch(newURL, {
            method: 'GET',
            headers: { 'X-Api-Key': 'q8Y7sxRHFhePtiyCUwTvBQ==g4yy9poZ6qrYNrsV' },
            contentType: 'application/json'
        });
        console.log(response);
        const data = await convertToJson(response);
        console.log(data)
        return data;
    }

    async finDogByCompleteName(completeName) {
        const response = await fetch(baseURL + `name=${completeName}`)
        const data = await convertToJson(response);
        return data.Result
    }
}