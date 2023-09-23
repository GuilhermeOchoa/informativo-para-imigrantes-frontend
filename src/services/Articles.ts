import { api } from "@services/api";

export function getArticles(language: string) {
    return api.get("/articles?language=" + language);
};