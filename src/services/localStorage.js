class LocalStorageService {
  constructor() {
    this.key = `tmdb-saved-list`;
  }

  get() {
    const str = localStorage.getItem(this.key);
    if ( str ) {
      return JSON.parse(str);
    } else {
      return [];
    }
  }

  set(value) {
    localStorage.setItem(this.key, JSON.stringify(value));
  }

  add(item) {
    const data = this.get();
    data.push(item);
    this.set(data);
  }

  remove(itemId) {
    const data = this.get();
    this.set(data.filter(storeItem => storeItem.id !== itemId));
  }
}

const localStorageService = new LocalStorageService();

export default localStorageService;