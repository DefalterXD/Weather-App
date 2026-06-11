import { tempMode } from "../core/weather.js";
import { displayConditionData } from "./displayCondition.js";
import { displayHoursData } from "./displayHours.js";
import { displayMetaData } from "./displayMeta.js";
import { displayWeekData } from "./displayWeek.js";

const mainWeatherContainer = document.querySelector('.weather__container');


export const displayData = function displayDataAboutCityInPage(city) {
    const metaDataElement = displayMetaData(city.resolvedAddress, city.conditions, city.temp);
    const conditionDataElement = displayConditionData(city.feelslike, city.windspeed, city.uvindex, city.firstWeekDays[0].dew);
    const hourDataElement = displayHoursData(city.firstWeekDays[0].hours);
    const weekDataElement = displayWeekData(city.firstWeekDays);

    mainWeatherContainer.append(metaDataElement, conditionDataElement, hourDataElement, weekDataElement);
    console.log(city);
};
