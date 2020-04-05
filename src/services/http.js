import axios from 'axios';

class HttpService {
  constructor() {
    this.apiKey = `9be5962f75cabd26c04eb4443674e0d2`;
    this.baseURL = `https://api.themoviedb.org/3`;
  }

  processURL(url) {
    const parts = url.split('?');
    return `${this.baseURL}${parts[0]}?api_key=${this.apiKey}&${parts[1]}`;
  }

  get(url) {
    return axios.get(this.processURL(url));
  }
}

const httpService = new HttpService();

export default httpService;