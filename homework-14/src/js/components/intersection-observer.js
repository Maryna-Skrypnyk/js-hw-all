import getRefs from '../get-refs';

const refs = getRefs();

const options = {
  root: document.querySelector('#scrollArea'),
  rootMargin: '0px',
  threshold: 1.0,
};

const callback = entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log(entry);
    }
  });
};

const observer = new IntersectionObserver(callback, options);

observer.observe(refs.sentinel);
