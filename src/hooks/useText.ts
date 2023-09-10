import React, { useEffect, useState } from 'react';
import { getText } from '@services/api';
import { textDTO } from '@dtos/textDTO';

export const useText = (language: string, screen: string, sequence: number) => {
  const [textData, setTextData] = useState<textDTO | null>(null);

  async function fetchData() {
    try {
      const data = await getText(language, screen, sequence);
      setTextData(data);
    } catch (error) {
      console.error('Erro ao buscar o texto:', error);
    }
  }

  useEffect(() => {
    fetchData();
  }, [language, screen, sequence]);

  return textData;
};