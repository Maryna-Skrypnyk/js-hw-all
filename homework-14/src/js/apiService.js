import dotenv from 'dotenv';
dotenv.config();
// const API_KEY = process.env.API_KEY;

const API_KEY = '22687504-cd17fd3731d2b66e1d47a182f';

const BASE_URL = 'https://pixabay.com/api';

export default class PhotoApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  fetchPhotos() {
    const searchParams = new URLSearchParams({
      image_type: 'photo',
      orientation: 'horizontal',
      q: this.searchQuery,
      page: this.page,
      per_page: 12,
      key: API_KEY,
    });

    const url = `${BASE_URL}/?${searchParams}`;

    return fetch(url)
      .then(response => response.json())
      .then(({ hits }) => {
        this.incrementPage();
        return hits;
      })
      .catch(error => console.log(error));
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}

//////////////// try-catch/async-await

// export default class PhotoApiService {
//   constructor() {
//     this.searchQuery = '';
//     this.page = 1;
//   }

//   async fetchGallery() {
//     const searchParams = new URLSearchParams({
//       image_type: 'photo',
//       orientation: 'horizontal',
//       q: this.searchQuery,
//       page: this.page,
//       per_page: 12,
//       key: API_KEY,
//     });

//     const url = `${BASE_URL}?${searchParams}`;

// try {
//   const response = await fetch(url);
//     const hits = await response.json();
//         this.incrementPage();
//         return hits;
// } catch (error) {
//   console.log(error.message);
// }
//   }

//   incrementPage() {
//     this.page += 1;
//   }

//   resetPage() {
//     this.page = 1;
//   }

//   get query() {
//     return this.searchQuery;
//   }

//   set query(newQuery) {
//     this.searchQuery = newQuery;
//   }
// }
