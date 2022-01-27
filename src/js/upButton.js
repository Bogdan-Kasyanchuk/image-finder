import throttle from 'lodash.throttle';
import refs from './refs.js';

const { upButtonEl } = refs;

showButtonUp();

window.addEventListener(
  'scroll',
  throttle(() => showButtonUp(), 500),
);

upButtonEl.addEventListener('click', onButtonUpClick);

function showButtonUp() {
  pageYOffset < document.documentElement.clientHeight
    ? upButtonEl.classList.add('visually-hidden')
    : upButtonEl.classList.remove('visually-hidden');
}

function onButtonUpClick() {
  window.scrollTo({ top: 0 });
}
