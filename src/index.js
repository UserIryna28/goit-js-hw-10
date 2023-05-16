import './css/styles.css';

import Notiflix from 'notiflix';

const input = document.querySelector("#search-box")
const countryList = document.querySelector(".country-list")
const countryInfo = document.querySelector(".country-info")

const DEBOUNCE_DELAY = 300;
