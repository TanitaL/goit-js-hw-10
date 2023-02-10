import './css/styles.css';
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import fetchCountries from './fetchCountries';
import renderCountries from './renderCountries';

const DEBOUNCE_DELAY = 300;

const input = document.querySelector("#search-box");
const listofCountries = document.querySelector(".country-list")
const countryInfo = document.querySelector(".country-info")

input.addEventListener("input", debounce(searchCountries,DEBOUNCE_DELAY))

function searchCountries(event) { 
    let country = event.target.value.trim()
    if (country) {
        fetchCountries(country)
            .then(dataCountries => {
                renderCountries(dataCountries)
            })
            .catch(error => {
                Notify.failure("Oops, there is no country with that name")
            })
    } else {
        listofCountries.innerHTML = ""
        countryInfo.innerHTML = ""
    }
    
}




