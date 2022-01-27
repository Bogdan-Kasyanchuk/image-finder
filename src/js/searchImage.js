import refs from './refs.js';
import { API_SearchServices } from './API_SearchServices.js';

const { formEl, clearButtonEl } = refs;

export const searchImageServices = new API_SearchServices();

formEl.addEventListener('submit', searchImage);

function searchImage(event) {
  event.preventDefault();
  searchImageServices.searchQuery = event.target.elements.query.value;
  searchImageServices.resetPage();
  searchImageServices.clearMurkup();
  searchImageServices.getFetchImage();
  formEl.reset();
}

clearButtonEl.addEventListener('click', () => {
  formEl.reset();
});
