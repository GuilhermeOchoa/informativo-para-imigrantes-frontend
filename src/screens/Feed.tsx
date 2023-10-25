import React, { useEffect, useState } from 'react';
import { VStack, Center, FlatList, HStack, useToast, Divider, Text } from 'native-base';

import { OpportunityDTO } from '@dtos/OpportunityDTO';
import { getCategoriesWithCount } from '@services/Programs';
import { OpportunityCads } from '@components/OpportunityCard';

export function Feed() {
  const [oportunidades, setOportunidades] = useState<OpportunityDTO[] | null>(null);
  const toast = useToast();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getCategoriesWithCount();
        const data = response.data;
        console.log("response" + response)
        console.log("response data" + response.data)

        const oportunidadesRecebidas: OpportunityDTO[] = [];

        for (const [type, quantity] of Object.entries(data)) {
          const quantityNumber = Number(quantity);
          oportunidadesRecebidas.push(new OpportunityDTO(type, quantityNumber));
        }

        setOportunidades(oportunidadesRecebidas);
      } catch (error) {
        console.error('Erro na requisição:', error);
       
      }
    }

    fetchData();
  }, []);

  return (
    <VStack flex={1} px={6} pb={6} mt={12}>
      <HStack alignItems="center" m={2}>
        <VStack flex={1}>
          <Center>
            <Text fontFamily="body" fontSize="xl">
              Oportunidades
            </Text>
          </Center>
        </VStack>
      </HStack>
      <Divider my={4} bgColor="green.500" />

      {oportunidades && oportunidades.length > 0 ? (
        <FlatList
          data={oportunidades}
          renderItem={({ item }) => (
            <OpportunityCads data={item} />
          )}
          showsVerticalScrollIndicator={false}
          _contentContainerStyle={{ paddingBottom: 10 }}
        />
      ) : (
        <Text>No momento não há oportunidades disponíveis.</Text>
      )}
    </VStack>
  );
}
