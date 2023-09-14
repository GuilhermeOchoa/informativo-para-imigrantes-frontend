import { api } from "./api";

export function getArticles(language: string) {
    console.log(language);
    return api.get("/articles?language=" + language);
};