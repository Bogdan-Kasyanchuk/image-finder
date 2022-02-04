import refs from './refs';

const { bodyEl, themeSwitchEl } = refs;

const theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const { LIGHT, DARK } = theme;

function startTheme() {
  if (localStorage.getItem('theme') === DARK) {
    bodyEl.classList.add(DARK);
    themeSwitchEl.checked = true;
  }
}

startTheme();

themeSwitchEl.addEventListener('change', themeSwitch);

function themeSwitch(event) {
  if (event.target.checked) {
    bodyEl.classList.remove(LIGHT);
    bodyEl.classList.add(DARK);
  } else {
    bodyEl.classList.remove(DARK);
    bodyEl.classList.add(LIGHT);
  }
  localStorage.setItem('theme', bodyEl.classList.value);
}
