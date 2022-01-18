import { searchImageServices } from './main';
import { lightbox } from './fullSizeImage.js';

export default new IntersectionObserver(onEntry, { rootMargin: '400px' });

let query;

function onEntry(entries) {
  if (searchImageServices.searchQuery === query) {
    entries.forEach(entry => {
      if (entry.isIntersecting && searchImageServices.searchQuery !== '') {
        searchImageServices.getLoadMore();
        lightbox.refresh();
      }
    });
  }
  query = searchImageServices.searchQuery;
}
