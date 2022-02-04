import refs from './refs';

const { loaderEl } = refs;

export function showLoader() {
  loaderEl.classList.toggle('visually-hidden');
}
