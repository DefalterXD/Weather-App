import { format } from "date-fns";
import { tempMode } from "../core/weather.js";

export const initDisplayHoursData = function initDisplayHoursDataOnThePage(
  hoursOfTheCurrentDay,
) {
  const hourSection = document.createElement("section");
  hourSection.classList.add("hour__container");

  const hourHeader = document.createElement("h1");
  hourHeader.classList.add("hour__header");
  hourHeader.textContent = `Today's Forecast`;

  const hoursCardContainer = document.createElement("div");
  hoursCardContainer.classList.add("hour__card", "container");

  for (const hour of hoursOfTheCurrentDay) {
    const hourCard = document.createElement("div");
    hourCard.classList.add("hour__card");

    const timeTitle = document.createElement("p");
    timeTitle.classList.add("time__title");

    // FORMAT the current day and append hours to correctly format it into 'am' and 'pm'
    const now = format(new Date(), "MMMM d, y");
    const custTime = hour.datetime;
    const custDt = new Date(`${now} ${custTime}`);

    timeTitle.textContent = format(custDt, "p");

    const hourWeatherIcon = document.createElement("img");
    hourWeatherIcon.classList.add("hour__img");
    import(`../iconModules/${hour.icon}.js`)
      .then((iconResult) => {
        hourWeatherIcon.src = iconResult.iconImgSrc;
        hourWeatherIcon.alt = iconResult.iconImgAlt;
      })
      .catch((error) => {
        console.error(error);
      });

    const tempTitle = document.createElement("p");
    tempTitle.classList.add("temp__title");
    tempTitle.textContent = !tempMode.isCelsius
      ? `${hour.temp} F°`
      : `${hour.temp} C°`;

    hourCard.append(timeTitle, hourWeatherIcon, tempTitle);
    hoursCardContainer.append(hourCard);
  }

  hourSection.append(hourHeader, hoursCardContainer);

  return hourSection;
};

export const displayExistingHoursData = function displayHoursDataOnThePage(
  hoursOfTheCurrentDay,
) {
  const tempTitle = document.querySelectorAll(".temp__title");
  const hourCardImgs = document.querySelectorAll(".hour__img");

  let imgCounterIdx = 0;
  for (const hourImg of hourCardImgs) {
    import(`../iconModules/${hoursOfTheCurrentDay[imgCounterIdx].icon}.js`)
      .then((iconResult) => {
        hourImg.src = iconResult.iconImgSrc;
        hourImg.alt = iconResult.iconImgAlt;
      })
      .catch((error) => {
        console.error(error);
      });
    imgCounterIdx++;
  }

  let tempDescIdx = 0;
  for (const tempHourCard of tempTitle) {
    tempHourCard.textContent = !tempMode.isCelsius
      ? `${hoursOfTheCurrentDay[tempDescIdx].temp} F°`
      : `${hoursOfTheCurrentDay[tempDescIdx].temp} C°`;
  }
};
