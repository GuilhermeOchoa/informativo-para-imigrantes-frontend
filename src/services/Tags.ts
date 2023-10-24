import { api } from "@services/Api";

export function getAllTags(language: string) {
    console.log(language)
    return api.get("/tags?language=" + language);
};