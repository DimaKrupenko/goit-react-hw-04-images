import axios from 'axios';

axios.defaults.baseURL =
  'https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12';

export const API = {
  page: 1,
  per_page: 12,
  API_KEY: '31276153-bbebebed3806edcc66ad5b8b4',
  query: '',

  increasePage() {
    API.page += 1;
  },

  resetPage() {
    API.page = 1;
  },

  setQuery(query) {
    API.query = query;
  },

  resetQuery() {
    API.query = '';
  },

  async addMaterial() {
    const url = `https://pixabay.com/api/?key=${API.API_KEY}&q=${API.query}&image_type=photo&orientation=horizontal&safesearch=true&page=${API.page}&per_page=${API.per_page}`;
    const response = await axios.get(url);
    return response.data.hits;
  },
};
