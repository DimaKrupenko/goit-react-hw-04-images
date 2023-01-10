import axios from 'axios';

axios.defaults.baseURL =
  'https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12';

export const API = {
  page: 1,
  per_page: 12,
  API_KEY: '31276153-bbebebed3806edcc66ad5b8b4',
  query: '',

  increasePage() {
    this.page += 1;
  },

  resetPage() {
    this.page = 1;
  },

  setQuery(query) {
    this.query = query;
  },

  resetQuery() {
    this.query = '';
  },

  async addMaterial() {
    const url = `https://pixabay.com/api/?key=${this.API_KEY}&q=${this.query}&image_type=photo&orientation=horizontal&safesearch=true&page=${this.page}&per_page=${this.per_page}`;
    const response = await axios.get(url);
    return response.data.hits;
  },
};
