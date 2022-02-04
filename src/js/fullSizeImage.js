import SimpleLightbox from 'simplelightbox';

export let lightbox = new SimpleLightbox('.gallery__wrapper a', {
  captionsData: 'alt',
  captionDelay: '100',
});
