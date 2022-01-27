import refs from './refs.js';
import { searchImageServices } from './searchImage';
import { lightbox } from './fullSizeImage.js';

const { watchingEL } = refs;

const observer = new IntersectionObserver(onEntry, { rootMargin: '400px' });

observer.observe(watchingEL);

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
