import { Notify } from 'notiflix/build/notiflix-notify-aio';

const options = { timeout: 3000, showOnlyTheLastOne: true, cssAnimationDuration: 100 };

export function notifySuccess() {
  Notify.success('Search successfully!', options);
}

export function notifyWarning(text) {
  Notify.warning(text, options);
}

export function notifyFailure(error) {
  Notify.failure(`${error}`, options);
}
