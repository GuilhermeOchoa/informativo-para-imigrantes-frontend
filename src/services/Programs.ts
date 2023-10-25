import { OpportunityDTO } from "@dtos/OpportunityDTO";
import { api } from "@services/Api";

export async function getCategoriesWithCount()  {

    return api.get('localhost:8080/program/categories');

}
