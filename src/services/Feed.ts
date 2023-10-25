import { api } from "@services/Api";

export function getProgramByType(programType: string) {
    return api.get("/program?type=" + programType);
};