import galleryTpl from './templates/gallery.hbs';
import PhotoApiService from './js/apiService';
import {
  errorNotify,
  successNotify,
  noticeNotify,
} from './js/components/pnotify';
import LoadMoreButton from './js/components/load-more-btn';
import getRefs from './js/get-refs';
import './js/components/backToTop';
import './js/components/lightbox';

const refs = getRefs();

const loadMoreButton = new LoadMoreButton({
  selector: '[data-action="load-more"]',
  hidden: true,
});
const photoApiService = new PhotoApiService();

refs.searchForm.addEventListener('submit', onSearchForm);

function onSearchForm(e) {
  e.preventDefault();
  clearPhotosContainer();

  photoApiService.query = e.currentTarget.elements.query.value;
  loadMoreButton.hide();

  if (!photoApiService.query || photoApiService.query.trim() === '') {
    return errorNotify('Enter your request, please!');
  }

  loadMoreButton.show();
  photoApiService.resetPage();
  fetchPhotos();

  // e.currentTarget.elements.query.value = '';
}

function fetchPhotos() {
  loadMoreButton.disable();
  loadMoreButton.removeEnd();

  photoApiService.fetchPhotos().then(photos => {
    if (photos.length === 0) {
      loadMoreButton.hide();
      errorNotify('There are no such photos!');
      return;
    }

    if (photos.length < 12 && photos.length > 0) {
      loadMoreButton.disable();
      loadMoreButton.showEnd();
      makePhotosMarkup(photos);
      noticeNotify('These are the latest photos!');
      return;
    }

    makePhotosMarkup(photos);
    // loadMoreButton.hide();
    successNotify('You have found photos!');
    return;
  });
}

function makePhotosMarkup(photos) {
  refs.galleryContainer.insertAdjacentHTML('beforeend', galleryTpl(photos));
}

function clearPhotosContainer() {
  refs.galleryContainer.innerHTML = '';
}

const onEntry = entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting && photoApiService.query !== '') {
      photoApiService.fetchPhotos().then(photos => {
        if (photos.length < 12 && photos.length > 0) {
          loadMoreButton.showEnd();
          makePhotosMarkup(photos);
          noticeNotify('These are the latest photos!');
          return;
        }

        makePhotosMarkup(photos);
        return;
      });
    }
  });
};

const options = {
  // root: document.querySelector('#scrollArea'),
  rootMargin: '200px',
  // threshold: 1.0,
};

const observer = new IntersectionObserver(onEntry, options);
observer.observe(refs.sentinel);
