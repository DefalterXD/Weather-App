import { getLocation } from "../core/weather.js";

const searchField = document.querySelector('#city');
const searchButton = document.querySelector('.searchCity');

const checkInput = async function checkInputForValidValue(e) {
    e.preventDefault();
    if (!searchField.value) {
        console.log('No value was added');
        return;
    }

    const city = searchField.value;
    const cityResult = await getLocation(city);
    console.log(cityResult);
}

searchButton.addEventListener('click', checkInput);
