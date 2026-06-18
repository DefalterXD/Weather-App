import { displayExistingConditionData, initDisplayConditionData } from "./displayCondition.js";
import { displayExistingHoursData, initDisplayHoursData } from "./displayHours.js";
import { displayExistingMetaData, initDisplayMetaData } from "./displayMeta.js";
import { displayExistingWeekData, initDisplayWeekData } from "./displayWeek.js";
import { hideLoading } from "./loadingComponent.js";

const mainWeatherContainer = document.querySelector('.weather__container');

export const displayData = function displayDataAboutCityInPage(city) {
    let metaSection = document.querySelector('.meta__container');
    let conditionSection = document.querySelector('.condition__container');
    let hourSection = document.querySelector('.hour__container');
    let weekSection = document.querySelector('.week__container');

    if (metaSection) {
        displayExistingMetaData(city.resolvedAddress, city.conditions, city.temp, city.icon);
    } else {
        metaSection = initDisplayMetaData(city.resolvedAddress, city.conditions, city.temp, city.icon);
        mainWeatherContainer.appendChild(metaSection);
    }
    if (conditionSection) {
        displayExistingConditionData(city.feelslike, city.windspeed, city.uvindex, city.firstWeekDays[0].dew);
    } else {
        conditionSection = initDisplayConditionData(city.feelslike, city.windspeed, city.uvindex, city.firstWeekDays[0].dew);
        mainWeatherContainer.appendChild(conditionSection);
    }
    if (hourSection) {
        displayExistingHoursData(city.firstWeekDays[0].hours);
    } else {
        hourSection = initDisplayHoursData(city.firstWeekDays[0].hours);
        mainWeatherContainer.appendChild(hourSection);
    }
    if (weekSection) {
        displayExistingWeekData(city.firstWeekDays);
    } else {
        weekSection = initDisplayWeekData(city.firstWeekDays);
        mainWeatherContainer.appendChild(weekSection);
    }

    hideLoading();
};
