import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = 'c56bd7e53d7ca9a4e158096c2a9f2678';

export const PATH = {
  trending: 'trending/movie/day',
  searchByName: 'search/movie',
  searchByID: id => `/movie/${id}`,
};

export const fetchData = async (path, query) => {
  const searchQuery = query ? `&query=${query}&page=1` : '';
  const response = await axios(`${path}?api_key=${API_KEY}${searchQuery}`);
  return response.data;
};
