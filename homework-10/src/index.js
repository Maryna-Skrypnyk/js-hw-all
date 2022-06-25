import menuTemplate from './templates/articles.hbs';
import menu from './menu.json';
import './sass/index.scss';

const refs = {
  menuList: document.querySelector('.js-menu'),
};

const menuMarkup = menuTemplate(menu);

refs.menuList.insertAdjacentHTML('beforeend', menuMarkup);