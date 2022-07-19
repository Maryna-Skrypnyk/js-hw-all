const getRefs = () => {
  return {
    searchForm: document.querySelector('#search-form'),
    galleryContainer: document.querySelector('.js-gallery-list'),
    sentinel: document.querySelector('#sentinel'),
  };
};

export default getRefs;
