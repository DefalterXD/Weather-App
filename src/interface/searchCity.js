import { getLocation, tempMode } from "../core/weather.js";
import { displayData } from "./displayData.js";

const searchField = document.querySelector('#city');
const searchButton = document.querySelector('.searchCity');

const checkInput = async function checkInputForValidValue(e) {
    
    try {
        e.preventDefault();
        if (!searchField.value) {
            console.log('No value was added');
            return;
        }
        const city = searchField.value;
        const cityResult = await getLocation(city);
        
        // IF the result exist then proceed 
        if (cityResult) {
            tempMode.cityReference = cityResult;
            displayData(cityResult);
        }
    } catch (error) {
        console.log(error);
    }
};

searchButton.addEventListener('click', checkInput);
