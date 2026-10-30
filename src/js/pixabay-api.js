import axios from 'axios';

const API_KEY = '58301038-85ce269383a58cb77f22b25a0';
const BASE_URL = 'https://pixabay.com/api/';

export function getImagesByQuery(query) {
  const searchParams = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };

  return axios.get(BASE_URL, { params: searchParams })
    .then(response => response.data);
}


