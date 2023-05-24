import './css/styles.css';
import { fetchCountries } from './fetchCountries.js';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import debounce from 'lodash.debounce'

const DEBOUNCE_DELAY = 300;


const input = document.querySelector("#search-box")
const countryList = document.querySelector(".country-list")
const countryInfo = document.querySelector(".country-info")


input.addEventListener('input', debounce(onInput, DEBOUNCE_DELAY))

function onInput(e) {
    e.preventDefault()
    const name = input.value.trim()

    if (name === '') {
        clearMarkup()
        return
    }
   fetchCountries(name)
 .then(countries => {
     if (countries.length === 1) {
        
         countryList.innerHTML = '';
         
         showingCountryInfo(countries)
        
     } else if (countries.length >= 10) {
         clearMarkup()
         Notify.info("Too many matches found. Please enter a more specific name.")
     } else if (countries.length <= 10) {
         countryInfo.innerHTML = ""
         showingCountryList(countries)
    
         } else {
             showingCountryInfo(country[0])
              clearMarkup()
          }
     })
    
 
 }

function showingCountryList(countries) {
    
    const markup = countries

     .map(({ name, flags }) => {
      return `
          <li class="country-list__item">
              <img class="country-list__flag" src="${flags.svg}" alt="Flag of ${name.official}" width = 30px height = 30px>
              <h2 class="country-list__name">${name.official}</h2>
          </li>
          `
     })
        countryList.innerHTML = markup
        .join('')
    
  return markup
}
    

function showingCountryInfo(countries) {
    
    const markup = countries
    .map(({ flags, name, capital, population, languages }) => {
      return `
        <ul class="country-info__list">
        <img src="${flags.svg}" alt="${name.official}" width="100" height="auto">
        <li class="country-info__item-name"><p><b></b>${name.official}</p></li>
            <li class="country-info__item"><p><b>Capital: </b>${capital}</p></li>
            <li class="country-info__item"><p><b>Population: </b>${population}</p></li>
            <li class="country-info__item"><p><b>Languages: </b>${Object.values(languages).join(', ')}</p></li>
        </ul>
       `
    })
       countryInfo.innerHTML = markup
        .join('')
    
    return markup
    
} 



function clearMarkup() {
    countryList.innerHTML = "";
    countryInfo.innerHTML = ""
}
