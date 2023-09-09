import axios from 'axios';

const API_BASE_URL = "http://127.0.0.1:8080/texts/";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin' : '*',
    'Access-Controll-Allow-Headers' : '*',
    'Access-Controll-Allow-Credentials' : 'true'
    }

});

export const getAllTexts = async () => {
    try {
        const response = await api.get('');
        return response.data;
    } catch (error) {
        console.error('Erro ao buscar os dados:', error);
        throw error;
    }    
}

export const getText = async (language: String, screen: String, sequence: Number ) => {
    const param = `/language/${language}/screen/${screen}/sequence/${sequence}`
  try {
    const response = await api.get(param);
    console.log(response, ' response ')
    return response.data;

  } catch (error) {
    console.log(error,' error')
    throw error;
  }
};
