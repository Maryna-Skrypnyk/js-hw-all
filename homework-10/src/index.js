import './sass/index.scss';
import menu from './menu.json';
import makeMenuMarkup from './js/makeTemplate';

const refs = {
  menuList: document.querySelector('ul.js-menu'),
};

refs.menuList.insertAdjacentHTML('beforeend', makeMenuMarkup(menu));
