import countryCardTpl from './templates/country.hbs';
import countriesListTpl from './templates/countries.hbs';
import debounce from 'lodash.debounce';
import API from './js/fetch-api';
import getRefs from './js/get-refs';

const refs = getRefs();

const renderCountryCard = country => {
  const markup = countryCardTpl(country);
  refs.countryContainer.insertAdjacentHTML('beforeend', markup);
};

const renderCountriesList = countries => {
  const markup = countriesListTpl(countries);
  refs.countryContainer.insertAdjacentHTML('beforeend', markup);
};

const onFetchError = error => {
  alert('Упс, что-то пошло не так!');
};

const clearCountry = () => {
  refs.countryContainer.innerHTML = '';
};

const onInputChange = e => {
  clearCountry();
  const searchQuery = e.target.value;
  if (!searchQuery) {
    return;
  }

  API.fetchCountries(searchQuery)
    .then(country => {
      console.log(country);
      if (country.length < 2) {
        renderCountryCard(country);
      } else if (country.length > 1 && country.length < 10) {
        renderCountriesList(country);
      } else {
        console.log('No');
      }
    })
    .catch(onFetchError);
};

refs.input.addEventListener('input', debounce(onInputChange, 500));
