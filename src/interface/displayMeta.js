import { tempMode } from "../core/weather.js";
import { tempModeButtonSwitch } from "./tempMode.js";

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
    
    let weatherImg = document.createElement('img');
    weatherImg.classList.add('meta__img');
    
    import(`../iconModules/${icon}.js`).then(iconResult => {
        weatherImg.src = iconResult.iconImgSrc;
        weatherImg.alt = iconResult.iconImgAlt;
    }).catch(error => {
        console.error(error);
    });

    const tempModeButton = document.createElement('button');
    tempModeButton.classList.add('button__temp');
    tempModeButton.setAttribute('temp-mode', 'F°');
    
    tempModeButtonSwitch(tempModeButton);
    
    metaSection.append(addressTitle, currentDesc, currentTemp, weatherImg, tempModeButton);

    return metaSection;
};

export const displayExistingMetaData = function displayExistingMetaDataOnThePage(resolvedAddress, tempDescription, cityTemp, icon) {

    const addressTitle = document.querySelector('.address__title');
    // SPLIT the address to get only the city name
    addressTitle.textContent = resolvedAddress.split(',')[0].toString().toLowerCase();

    const currentDesc = document.querySelector('.current__desc');
    currentDesc.textContent = tempDescription;

    const weatherImg = document.querySelector('.meta__img');

    import(`../iconModules/${icon}.js`).then(iconResult => {
        weatherImg.src = iconResult.iconImgSrc;
        weatherImg.alt = iconResult.iconImgAlt;
    }).catch(error => {
        console.error(error);
    });

    const currentTemp = document.querySelector('.current__temp');
    if (currentTemp) currentTemp.textContent = (!tempMode.isCelsius) ? `${cityTemp} F°` : `${cityTemp} C°`;

};
