import { OpportunityDTO } from "@dtos/OpportunityDTO";
import { api } from "@services/Api";

export async function getCategoriesWithCount(): Promise<OpportunityDTO[]>  {

    const response: Map<string, number> = await api.get('/program/categories');

    const dtos: OpportunityDTO[] = [...response.entries()].map(([type, quantity]) => ({
      type,
      quantity,
    }));

    return dtos;
}
