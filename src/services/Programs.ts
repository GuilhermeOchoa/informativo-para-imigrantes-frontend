import { OpportunityDTO } from "@dtos/OpportunityDTO";
import { api } from "@services/Api";

export async function getCategoriesWithCount()  {

    return api.get('/program/categories');

}
