import { tempMode } from "../core/weather.js";
import { displayConditionData } from "./displayCondition.js";
import { displayHoursData } from "./displayHours.js";
import { displayMetaData } from "./displayMeta.js";
import { displayWeekData } from "./displayWeek.js";

const mainWeatherContainer = document.querySelector('.weather__container');

const deleteDuplicateSections = function deleteDuplicateSectionsAfterCityQuery() {
    const metaSection = document.querySelector('.meta__container');
    const conditionSection = document.querySelector('.condition__container');
    const hourSection = document.querySelector('.hour__container');
    const weekSection = document.querySelector('.week__container');

    if (metaSection) {
        metaSection.remove();
    } 
    if (conditionSection) {
        conditionSection.remove();
    }
    if (hourSection) {
        hourSection.remove();
    } 
    if (weekSection) {
        weekSection.remove();
    }
}

export const displayData = function displayDataAboutCityInPage(city) {
    deleteDuplicateSections();
    const metaDataElement = displayMetaData(city.resolvedAddress, city.conditions, city.temp);
    const conditionDataElement = displayConditionData(city.feelslike, city.windspeed, city.uvindex, city.firstWeekDays[0].dew);
    const hourDataElement = displayHoursData(city.firstWeekDays[0].hours);
    const weekDataElement = displayWeekData(city.firstWeekDays);

    mainWeatherContainer.append(metaDataElement, conditionDataElement, hourDataElement, weekDataElement);
    console.log(city);
};
