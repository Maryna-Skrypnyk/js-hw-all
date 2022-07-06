const BASE_URL = 'https://restcountries.com/v2';

const fetchCountries = async searchQuery => {
  const response = await fetch(`${BASE_URL}/name/${searchQuery}`);
  const country = await response.json();
  return country;
};

export default { fetchCountries };

///////////// promise
// const fetchCountries = searchQuery => {
//   return fetch(`${BASE_URL}/name/${searchQuery}`).then(res => res.json());
// };

// // console.log(fetchCountries('Ukraine'));

// export default { fetchCountries };
