import SimpleLightbox from 'simplelightbox';

export let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: '250',
});
