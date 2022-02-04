import throttle from 'lodash.throttle';
import refs from './refs';

const { upButtonEl } = refs;

window.addEventListener(
  'scroll',
  throttle(() => showButtonUp(), 500),
);

function showButtonUp() {
  pageYOffset < document.documentElement.clientHeight
    ? upButtonEl.classList.add('visually-hidden')
    : upButtonEl.classList.remove('visually-hidden');
}

showButtonUp();

upButtonEl.addEventListener('click', onButtonUpClick);

function onButtonUpClick() {
  window.scrollTo({ top: 0 });
}
