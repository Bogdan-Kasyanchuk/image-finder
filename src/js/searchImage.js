import refs from './refs';
import { API_SearchServices } from './API_SearchServices';

const { formEl, clearButtonEl } = refs;

export const getImageServices = new API_SearchServices();

formEl.addEventListener('submit', getImage);

function getImage(event) {
  event.preventDefault();
  getImageServices.searchQuery = event.target.elements.query.value;
  getImageServices.resetPage();
  getImageServices.clearMurkup();
  getImageServices.getFetchData();
  formEl.reset();
}

clearButtonEl.addEventListener('click', () => {
  formEl.reset();
});
