import { getLocation } from "../core/weather.js";
import { displayData } from "./displayData.js";

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
    displayData(cityResult);
}

searchButton.addEventListener('click', checkInput);
