// import './sass/index.scss';
import menu from './menu.json';

const refs = {
  menuList: document.querySelector('.js-menu'),
};

// import menuTemplate from '../templates/articles.hbs';

const makeMenuMarkup = articles => {
  menuTemplate(articles);
};

refs.menuList.insertAdjacentHTML('beforeend', makeMenuMarkup(JSON.parse(menu)));
