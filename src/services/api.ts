import axios from 'axios';

const API_BASE_URL = 'http://10.0.2.2:8080/';

const api = axios.create({
  baseURL: API_BASE_URL,
});

export async function getAllTexts() {
  try {
    const response = await api.get('texts');
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar os dados:', error);
    throw error;
  }
}

export async function getText(language: string, screen: string, sequence: number) {
  const param = `texts/language/${language}/screen/${screen}/sequence/${sequence}`;

  try {
    const response = await api.get(param);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar o texto:', error);
    throw error;
  }
}