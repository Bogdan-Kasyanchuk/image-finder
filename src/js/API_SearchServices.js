import axios from 'axios';
import refs from './refs';
import { notifySuccess, notifyWarning, notifyFailure } from './notify';
import { showLoader } from './loader';
import imageCard from '../templates/imageCard.hbs';
import { lightbox } from './fullSizeImage';

const { gallery__wrapperEl } = refs;

export class API_SearchServices {
  #totalHits;

  constructor() {
    this.KEY = '23972474-59b971b2a70ac3d99136f23c2';
    this.BASE_URL = 'https://pixabay.com/api';
    this._page = 1;
    this._searchQuery = '';
    this.#totalHits = null;
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

  async getFetchData() {
    if (!this._searchQuery) {
      notifyWarning('Enter the name of the picture or photo!');
      return;
    }
    let url = `${this.BASE_URL}/?q=${this._searchQuery}&per_page=20&page=${this._page}&key=${this.KEY}`;
    showLoader();
    try {
      const result = await axios.get(url);
      showLoader();
      if (!result.data.hits.length) {
        notifyWarning('Sorry, there are no images matching your search query. Please try again!');
        return;
      }
      if (this._page === 1) notifySuccess();
      this.#totalHits = result.data.totalHits;
      this.murkupData(result.data.hits);
      lightbox.refresh();
    } catch (error) {
      showLoader();
      notifyFailure(error);
    }
  }

  murkupData(data) {
    gallery__wrapperEl.insertAdjacentHTML('beforeend', imageCard(data));
  }

  resetPage() {
    this._page = 1;
  }

  clearMurkup() {
    if (!this._searchQuery) return;
    gallery__wrapperEl.innerHTML = '';
  }

  getMore() {
    if (Math.ceil(this.#totalHits / 20) < this._page + 1) {
      notifyWarning('Sorry, there are no more images to upload!');
      return;
    }
    this.page = 1;
    this.getFetchData();
  }
}
