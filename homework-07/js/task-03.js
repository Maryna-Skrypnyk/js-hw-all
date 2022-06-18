const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

/// через document.createElement(el)

const galleriesListEl = document.querySelector('ul#gallery');
galleriesListEl.classList.add('gallery');

const makeImage = ({ alt, url }) => {
  const itemRef = document.createElement('li');
  const imgItemRef = document.createElement('img');
  itemRef.classList.add('item');
  imgItemRef.src = url;
  imgItemRef.alt = alt;
  imgItemRef.classList.add('image');
  imgItemRef.width = 500;

  itemRef.append(imgItemRef);
  return itemRef;
};

const makeListImages = images.map(makeImage);

galleriesListEl.append(...makeListImages);

/// через insertAdjacentHTML()

// const galleriesListRef = document.querySelector('ul#gallery');
// galleriesListRef.classList.add('gallery');

// const makeImgs = images => {
//   return images
//     .map(({ url, alt }) => {
//       return `<li class='item'><img src=${url} alt=${alt} class='image' /></li>`;
//     })
//     .join('');
// };

// galleriesListRef.insertAdjacentHTML('afterbegin', makeImgs(images));
