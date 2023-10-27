import { api } from "@services/Api";

export async function getCategoriesWithCount() {
    return api.get('programs/categories');
}

export function getProgramByType(programType: string) {
    return api.get("/programs?type=" + programType);
};