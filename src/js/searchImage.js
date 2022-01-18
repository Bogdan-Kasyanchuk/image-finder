import refs from './refs.js';
import { searchImageServices } from './main';

const { formEl } = refs;

export default function (event) {
  event.preventDefault();
  searchImageServices.searchQuery = event.target.elements.query.value;
  searchImageServices.resetPage();
  searchImageServices.clearMurkup();
  searchImageServices.getFetchImage();
  formEl.reset();
}
