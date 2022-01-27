import axios from 'axios';
import refs from './refs';
import { notifySuccess, notifyWarning, notifyFailure } from './notify';
import imageCard from '../templates/imageCard.hbs';
import { lightbox } from './fullSizeImage';
import { showLoader } from './loader';

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
    if (!this._searchQuery) {
      notifyWarning('Enter the name of the picture or photo!');
      return;
    }
    let url = `${this.BASE_URL}/?q=${this._searchQuery}&per_page=20&page=${this._page}&key=${this.KEY}`;
    showLoader();
    try {
      const result = await axios.get(url);
      showLoader();
      if (result.data.hits.length === 0) {
        notifyWarning('Sorry, there are no images matching your search query. Please try again!');
        return;
      }
      if (this._page === 1) notifySuccess();
      this.murkupImage(result.data.hits);
      lightbox.refresh();
    } catch (error) {
      showLoader();
      notifyFailure(error);
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
