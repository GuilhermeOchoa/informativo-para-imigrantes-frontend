import React, {useEffect, useState} from 'react'
import { getText } from '@services/textAPI';
import { textDTO }  from '@dtos/textDTO'

export const useText = (language: String, screen: String, sequence: Number) => {
    


  const [textData, setTextData] = useState<textDTO | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getText(language, screen, sequence);
        console.log(data)
        setTextData(data);
      } catch (error) {
        console.log(error, ' error useeffect')
      }
    };

    fetchData();
  }, [textData]);

  return textData;
};
