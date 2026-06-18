import { populateLocalStorage } from "../core/localStorage.js";
import {
  assignPropertiesFahrenheitToCelsius,
  getLocation,
  tempMode,
} from "../core/weather.js";
import { displayData } from "./displayData.js";
import { hideLoading, showLoading } from "./loadingComponent.js";

const searchField = document.querySelector("#city");
const searchButton = document.querySelector(".searchCity");

const checkInput = async function checkInputForValidValue(e) {
  showLoading();

  try {
    e.preventDefault();
    if (!searchField.value) {
      console.log("No value was added");
      hideLoading();
      return;
    }
    const city = searchField.value;
    tempMode.cityName = city;
    const cityResult = await getLocation(city);

    // IF the result exist AND the mode is not celsius then proceed
    if (cityResult && !tempMode.isCelsius) {
      tempMode.cityCelsius = JSON.parse(JSON.stringify(cityResult));
      assignPropertiesFahrenheitToCelsius(tempMode.cityCelsius);
      tempMode.cityFahrenheit = JSON.parse(JSON.stringify(cityResult));
      displayData(cityResult);
      populateLocalStorage();
    } else {
      tempMode.cityCelsius = JSON.parse(JSON.stringify(cityResult));
      assignPropertiesFahrenheitToCelsius(tempMode.cityCelsius);
      tempMode.cityFahrenheit = JSON.parse(JSON.stringify(cityResult));
      displayData(tempMode.cityCelsius);
      populateLocalStorage();
    }
  } catch (error) {
    hideLoading();
    console.log(error);
  }
};

searchButton.addEventListener("click", checkInput);
