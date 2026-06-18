import { populateLocalStorage } from "../core/localStorage.js";
import { tempMode } from "../core/weather.js";
import { displayData } from "./displayData.js";

export const tempModeButtonSwitch = (buttonElement) => {
  buttonElement.addEventListener("click", () => {
    if (!tempMode.isCelsius) {
      tempMode.isCelsius = true;
      buttonElement.setAttribute("temp-mode", "C°");
      displayData(tempMode.cityCelsius);
      populateLocalStorage();
    } else {
      tempMode.isCelsius = false;
      buttonElement.setAttribute("temp-mode", "F°");
      displayData(tempMode.cityFahrenheit);
      populateLocalStorage();
    }
  });
};
