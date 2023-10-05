import { api } from "@services/Api";

export function postProgramForm(body: {}) {

    return api.post("/program", body)
    .then((response) => {
        return response.data;
    })
    .catch((error) => {
        console.log(error);
    });
};