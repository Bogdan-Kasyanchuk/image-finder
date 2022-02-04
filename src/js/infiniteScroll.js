import refs from './refs';
import { getImageServices } from './searchImage';
import { lightbox } from './fullSizeImage';

const { watchingEL } = refs;

const observer = new IntersectionObserver(onEntry, { rootMargin: '200px' });

observer.observe(watchingEL);

let query;

function onEntry(entries) {
  if (getImageServices.searchQuery === query) {
    entries.forEach(entry => {
      if (entry.isIntersecting && getImageServices.searchQuery !== '') {
        getImageServices.getMore();
        lightbox.refresh();
      }
    });
  }
  query = getImageServices.searchQuery;
}
