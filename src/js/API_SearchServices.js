import refs from './refs.js';
import axios from 'axios';
import { notifySuccess, notifyFailure } from './notify.js';
import imageCard from '../templates/imageCard.hbs';
import { lightbox } from './fullSizeImage.js';

const { galleryEl } = refs;

export class API_SearchServices {
  constructor() {
    this.KEY = '23972474-59b971b2a70ac3d99136f23c2';
    this.BASE_URL = 'https://pixabay.com/api';
    this._page = 1;
    this._searchQuery = '';
    this.buttonLoadMore = null;
  }

  get page() {
    return this._page;
  }
  set page(value) {
    return (this._page += value);
  }

  get searchQuery() {
    return this._searchQuery;
  }
  set searchQuery(value) {
    return (this._searchQuery = value.trim());
  }

  async getFetchImage() {
    let url = `${this.BASE_URL}/?q=${this._searchQuery}&per_page=15&page=${this._page}&key=${this.KEY}`;
    try {
      const result = await axios.get(url);
      if (!this._searchQuery || result.data.hits.length === 0) throw new Error();
      if (this._page === 1) notifySuccess();
      this.murkupImage(result.data.hits);
      lightbox.refresh();
    } catch (error) {
      notifyFailure();
    }
  }

  murkupImage(data) {
    galleryEl.insertAdjacentHTML('beforeend', imageCard(data));
  }

  resetPage() {
    this._page = 1;
  }

  clearMurkup() {
    galleryEl.innerHTML = '';
  }

  getLoadMore() {
    this.page = 1;
    this.getFetchImage();
  }
}
