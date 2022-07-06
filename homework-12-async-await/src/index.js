import countryCardTpl from './templates/country.hbs';
import countriesListTpl from './templates/countries.hbs';
import debounce from 'lodash.debounce';
import API from './js/fetch-api';
import getRefs from './js/get-refs';
import {
  successNotify,
  noticeNotify,
  infoNotify,
  errorNotify,
} from './js/pnotify';

const refs = getRefs();

const renderCountryCard = country => {
  const markup = countryCardTpl(country);
  refs.countryContainer.insertAdjacentHTML('beforeend', markup);
};

const renderCountriesList = countries => {
  const markup = countriesListTpl(countries);
  refs.countryContainer.insertAdjacentHTML('beforeend', markup);
};

const onFetchError = () => {
  return errorNotify('Request data is not displayed. Try again later.');
};

const clearCountry = () => {
  refs.countryContainer.innerHTML = '';
};

const onInputChange = async e => {
  try {
    clearCountry();
    const searchQuery = e.target.value;
    if (!searchQuery) {
      return;
    }

    const country = await API.fetchCountries(searchQuery);
    if (country.length === 1) {
      renderCountryCard(country);
      successNotify(`You found the country ${country[0].name}!`);
      return;
    } else if (country.length > 1 && country.length < 10) {
      renderCountriesList(country);
      noticeNotify(
        `You have found ${country.length} countries for your request. Enter a more specific query.`
      );
      return;
    } else if (country.length > 10) {
      infoNotify(
        `You have found more than 10 countries for your request. Enter a more specific query.`
      );
      return;
    } else {
      errorNotify(`No country was found for your request.`);
      return;
    }
  } catch (error) {
    onFetchError();
  }
};

refs.input.addEventListener('input', debounce(onInputChange, 500));
