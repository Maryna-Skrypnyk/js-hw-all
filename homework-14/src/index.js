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
loadMoreButton.refs.button.addEventListener('click', onLoadMore);

function onSearchForm(e) {
  e.preventDefault();
  clearPhotosContainer();
  photoApiService.query = e.currentTarget.elements.query.value;

  if (!photoApiService.query) {
    return errorNotify('Enter your request, please!');
  }

  if (photoApiService.query.trim() === '') {
    return errorNotify('Enter your request!');
  }

  loadMoreButton.show();
  photoApiService.resetPage();
  fetchPhotos();
}

function fetchPhotos() {
  loadMoreButton.disable();
  loadMoreButton.removeEnd();

  photoApiService.fetchPhotos().then(photos => {
    if (photos.length === 0) {
      loadMoreButton.hide();
      return errorNotify('There are no such photos!');
    }

    if (photos.length < 12 && photos.length > 0) {
      loadMoreButton.showEnd();
      makePhotosMarkup(photos);
      noticeNotify('These are the latest photos!');
      return;
    }

    makePhotosMarkup(photos);
    loadMoreButton.enable();
    // scroll();
    successNotify('You have found photos!');
    return;
  });
}

function onLoadMore() {
  loadMoreButton.disable();
  loadMoreButton.removeEnd();

  photoApiService.fetchPhotos().then(photos => {
    if (photos.length === 0) {
      loadMoreButton.hide();
      return errorNotify('Please enter the correct query!');
    }

    if (photos.length < 12 && photos.length > 0) {
      loadMoreButton.showEnd();
      makePhotosMarkup(photos);
      scroll();
      noticeNotify('These are the latest photos!');
      return;
    }

    makePhotosMarkup(photos);
    loadMoreButton.enable();
    scroll();
    return;
  });
}

function makePhotosMarkup(photos) {
  refs.galleryContainer.insertAdjacentHTML('beforeend', galleryTpl(photos));
  // scroll();
}

function clearPhotosContainer() {
  refs.galleryContainer.innerHTML = '';
}

function scroll() {
  refs.sentinel.scrollIntoView({
    behavior: 'smooth',
    block: 'end',
  });

  window.scrollBy(0, 488);
}
