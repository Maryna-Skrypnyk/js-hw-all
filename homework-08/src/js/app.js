import galleryItems from './gallery-items.js'; // масив даних

const refs = {
  galleryList: document.querySelector('ul.js-gallery'),
  lightbox: document.querySelector('.js-lightbox'),
  overlay: document.querySelector('.lightbox__overlay'),
  lightboxImg: document.querySelector('.lightbox__image'),
  btnClose: document.querySelector(
    '.lightbox__button[data-action="close-lightbox"]',
  ),
}; // посилання для доступу до елементів

/// 1. Створення і рендер розмітки по масиву даних і наданим шаблоном.

const makeGallery = images => {
  return images
    .map(({ original, preview, description }) => {
      return `<li class="gallery__item">
  <a
    class="gallery__link"
    href="${original}"
  >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
    })
    .join('');
};

refs.galleryList.insertAdjacentHTML('beforeend', makeGallery(galleryItems));

/// 2. Реалізація делегування на галереї ul.js-gallery і
// отримання url великого зображення

// 3. Відкриття модального вікна при натисканні на елементі галереї.

// 4. Підміна значення атрибута src елемента img.lightbox__image.

const arrGalleryListCopy = [
  ...refs.galleryList.querySelectorAll('.gallery__image'),
]; // копія масиву елементів img

const onImgOpen = e => {
  e.preventDefault();

  if (e.target.nodeName !== 'IMG') {
    return;
  }

  imgModalOpen(e.target.dataset.source, e.target.alt, e.target);
};

const imgModalOpen = (src, alt, img) => {
  refs.lightbox.classList.add('is-open');
  refs.lightboxImg.src = src;
  refs.lightboxImg.alt = alt;
  refs.lightboxImg.dataset.index = arrGalleryListCopy.indexOf(img);

  window.addEventListener('keydown', onModalChangeByKey);
};

// 5. Закриття модального вікна при натисканні на кнопку
// button[data - action= ""close - lightbox"].

// 6. Очищення значення атрибута src елемента img.lightbox__image.
// Це необхідно для того, щоб при наступному відкритті модального вікна,
// поки вантажиться зображення, ми не бачили попереднє.

// 7. Закриття модального вікна при натисканні на div.lightbox__overlay.

const onModalClose = () => {
  refs.lightbox.classList.remove('is-open');
  refs.lightboxImg.src = '';
  refs.lightboxImg.alt = '';
  refs.lightboxImg.removeAttribute('data-index');

  window.removeEventListener('keydown', onModalChangeByKey);
};

// 8. Закриття модального вікна після натискання клавіші ESC.

// 9. Перегортування зображень галереї у відкритому модальному вікні
// клавішами "вліво" і "вправо".

const onModalChangeByKey = e => {
  const keys = {
    ESC: 'Escape',
    ARROW_RIGHT: 'ArrowRight',
    ARROW_LEFT: 'ArrowLeft',
  };

  if (e.code === keys.ESC) {
    onModalClose();
  }
  if (e.code === keys.ARROW_RIGHT) {
    lightboxImageMove(1);
  }
  if (e.code === keys.ARROW_LEFT) {
    lightboxImageMove(-1);
  }
};

const lightboxImageMove = step => {
  const currentImgIndex = Number(refs.lightboxImg.dataset.index);
  let nextImgIndex = currentImgIndex + step;
  if (nextImgIndex < 0) {
    nextImgIndex = arrGalleryListCopy.length - 1;
  }
  if (nextImgIndex > arrGalleryListCopy.length - 1) {
    nextImgIndex = 0;
  }
  refs.lightboxImg.src = arrGalleryListCopy[nextImgIndex].dataset.source;
  refs.lightboxImg.alt = arrGalleryListCopy[nextImgIndex].alt;
  refs.lightboxImg.dataset.index = nextImgIndex;
};

refs.galleryList.addEventListener('click', onImgOpen);
refs.btnClose.addEventListener('click', onModalClose);
refs.overlay.addEventListener('click', onModalClose);
