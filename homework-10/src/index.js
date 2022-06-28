import menuTemplate from './templates/menu.hbs';
import menu from './menu.json';
import './sass/index.scss';

const refs = {
  menuList: document.querySelector('.js-menu'),
  themeSwitch: document.querySelector('#theme-switch-toggle'),
};

/// 1. Рендер розмітки за шаблоном і даними.

refs.menuList.insertAdjacentHTML('beforeend', menuTemplate(menu));

/// 2.

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const THEME_KEY = 'theme';

const replaceThemes = (oldTheme, newTheme) => {
  document.body.classList.replace(oldTheme, newTheme);
  localStorage.setItem(THEME_KEY, newTheme);
};

const onSwitchToggle = e => {
  if (e.target.checked) {
    replaceThemes(Theme.LIGHT, Theme.DARK);
  } else {
    replaceThemes(Theme.DARK, Theme.LIGHT);
  }
};

const savedTheme = () => {
  const savedTheme = localStorage.getItem(THEME_KEY);
  if (savedTheme) {
    document.body.classList.value = savedTheme;
    refs.themeSwitch.checked = savedTheme === Theme.DARK;
  } else {
    document.body.classList.add(Theme.LIGHT);
  }
};

savedTheme();

refs.themeSwitch.addEventListener('change', onSwitchToggle);
