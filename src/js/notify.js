import { Notify } from 'notiflix/build/notiflix-notify-aio';

export function notifySuccess() {
  Notify.success('Search successful.', {
    timeout: 5000,
    showOnlyTheLastOne: true,
    cssAnimationDuration: 100,
  });
}

export function notifyFailure() {
  Notify.failure('Sorry, there are no images matching your search query. Please try again.', {
    timeout: 5000,
    showOnlyTheLastOne: true,
    cssAnimationDuration: 100,
  });
}
