import countryCardTpl from './templates/country.hbs';
import countriesListTpl from './templates/countries.hbs';
import debounce from 'lodash.debounce';
import API from './js/fetch-api';
import getRefs from './js/get-refs';
import notify from './js/pnotify';

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
  notify.errorNotify('Request data is not displayed. Try again later.');
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
      if (country.length < 2) {
        renderCountryCard(country);
        notify.successNotify(`You found the country ${country[0].name}!`);
      } else if (country.length > 1 && country.length < 10) {
        renderCountriesList(country);
        notify.noticeNotify(
          `You have found ${country.length} countries for your request. Enter a more specific query.`
        );
      } else if (country.length > 10) {
        notify.infoNotify(
          `You have found more than 10 countries for your request. Enter a more specific query.`
        );
      } else {
        notify.errorNotify(`No country was found for your request.`);
      }
    })
    .catch(onFetchError);
};

refs.input.addEventListener('input', debounce(onInputChange, 500));
