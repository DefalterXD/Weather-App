import { tempMode } from "../core/weather.js";

export const initDisplayMetaData = function initDisplayMetaDataOnThePage(resolvedAddress, tempDescription, cityTemp, icon) {
    const metaSection = document.createElement('section');
    metaSection.classList.add('meta__container');

    const addressTitle = document.createElement('h1');
    addressTitle.classList.add('address__title');
    // SPLIT the address to get only the city name
    addressTitle.textContent = resolvedAddress.split(',')[0].toString().toLowerCase();
    
    const currentDesc = document.createElement('h2');
    currentDesc.classList.add('current__desc');
    currentDesc.textContent = tempDescription;

    const currentTemp = document.createElement('h1');
    currentTemp.classList.add('current__temp');
    currentTemp.textContent = (!tempMode.isCelsius) ? `${cityTemp} F°` : `${cityTemp} C°`;
    

    const tempModeButton = document.createElement('button');
    tempModeButton.classList.add('button__temp');

    metaSection.append(addressTitle, currentDesc, currentTemp, tempModeButton);

    return metaSection;
};
