import * as basicLightbox from 'basiclightbox';
import '../../../node_modules/basiclightbox/dist/basicLightbox.min.css';

import getRefs from '../get-refs';

const refs = getRefs();

const createModalInstance = (image, alt) => {
  return basicLightbox.create(
    `<div class="lightbox__content">
    <img data="large-img" class="large-img" src="${image}" alt="${alt}" />
    </div>
    <button
        type="button"
        class="lightbox__button"
        data-action="close-lightbox"
      ></button>`
  );
};

export default refs.galleryContainer.onclick = e => {
  if (!e.target.getAttribute('data')) {
    return;
  }

  const image = e.target.getAttribute('data');
  const alt = e.target.getAttribute('alt');

  const instance = createModalInstance(image, alt);
  openLightbox(instance);

  //   window.addEventListener('keydown', e => {
  //     const ESC = 'Escape';
  //     if (e.code === ESC) {
  //       closeLightbox(instance);
  //     }
  //   });

  document.body.onkeydown = e => {
    const ESC = 'Escape';
    if (e.code === ESC) {
      closeLightbox(instance);
    }
  };

  document.querySelector('.basicLightbox').onclick = e => {
    if (e.target.nodeName === 'IMG') {
      return;
    }
    closeLightbox(instance);
    // window.removeEventListener('keydown');
  };

  document.querySelector('[data-action="close-lightbox"]').onclick = e => {
    if (e.target.nodeName === 'IMG') {
      return;
    }
    closeLightbox(instance);
    // window.removeEventListener('keydown');
  };
};

function openLightbox(instance) {
  instance.show();
  document.body.classList.add('modal-open');
}

function closeLightbox(instance) {
  instance.close();
  document.body.classList.remove('modal-open');
}
