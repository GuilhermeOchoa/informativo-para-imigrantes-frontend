import {api} from "./api";

export function getText(language: string, screen: string, sequence: number) {
    return api.get(`texts/language/${language}/screen/${screen}/sequence/${sequence}`);
}