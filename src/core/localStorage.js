import { displayData } from "../interface/displayData.js";
import { assignPropertiesFahrenheitToCelsius, getLocation, tempMode } from "./weather.js";

export const storageAvailable = function storageAvailableInBrowser(type) {
  let storage;
  try {
    storage = window[type];
    const x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      e.name === "QuotaExceededError" &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage &&
      storage.length !== 0
    );
  }
};

export const populateLocalStorage = function populateLocalStorageFromWeather() {
  localStorage.setItem('isCelsius', JSON.stringify(tempMode.isCelsius));
  localStorage.setItem('cityName', JSON.stringify(tempMode.cityName));
};

