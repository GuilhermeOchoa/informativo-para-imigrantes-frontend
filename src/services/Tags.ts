import { api } from "@services/Api";

export function getAllTags() {
    return api.get("/tags");
};