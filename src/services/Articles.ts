import { api } from "@services/Api";

export function getArticles(language: string) {
    return api.get("/articles?language=" + language);
};