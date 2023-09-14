import {api} from "./Api";

export function getText(language: string, screen: string, sequence: number) {
    return api.get(`texts/language/${language}/screen/${screen}/sequence/${sequence}`);
}