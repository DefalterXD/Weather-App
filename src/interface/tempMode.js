import { tempMode } from "../core/weather.js";
import { displayData } from "./displayData.js";


export const tempModeButtonSwitch = (buttonElement) => {
    buttonElement.addEventListener('click', () => {
        if (!tempMode.isCelsius) {
            tempMode.isCelsius = true;
            buttonElement.setAttribute('temp-mode', 'C°');
            displayData(tempMode.cityCelsius);
        } else {
            tempMode.isCelsius = false;
            buttonElement.setAttribute('temp-mode', 'F°');
            displayData(tempMode.cityFahrenheit);
        }
    });
}

