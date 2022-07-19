import { addBackToTop } from 'vanilla-back-to-top';

// addBackToTop({
//   diameter: 50,
//   backgroundColor: '#2196f3',
//   innerHTML:
//     '<svg viewBox="0 0 24 24"><path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"/></svg>',
//   textColor: '#fff',
//   scrollDuration: 200,
//   cornerOffset: 25,
// });

if (window.matchMedia('(max-width: 480px)').matches) {
  addBackToTop({
    diameter: 40,
    backgroundColor: 'rgba(33, 150, 243, 0.8)',
    innerHTML:
      '<svg viewBox="0 0 24 24"><path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"/></svg>',
    textColor: '#fff',
    scrollDuration: 200,
    cornerOffset: 10,
  });
}

if (window.matchMedia('(min-width: 480px)').matches) {
  addBackToTop({
    diameter: 50,
    backgroundColor: '#2196f3',
    innerHTML:
      '<svg viewBox="0 0 24 24"><path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"/></svg>',
    textColor: '#fff',
    scrollDuration: 200,
    cornerOffset: 30,
  });
}
