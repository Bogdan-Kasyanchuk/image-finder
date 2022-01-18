import refs from './refs.js';
import { API_SearchServices } from './API_SearchServices.js';
import searchImage from './searchImage.js';
import upButton from './upButton.js';
import observer from './infiniteScroll.js';

export const searchImageServices = new API_SearchServices();

const { formEl, upButtonEl, watchingEL } = refs;

formEl.addEventListener('submit', searchImage);
upButtonEl.addEventListener('click', upButton);
observer.observe(watchingEL);
