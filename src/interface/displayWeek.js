import { format } from "date-fns";
import { tempMode } from '../core/weather.js';

export const initDisplayWeekData = function initDisplayWeekDataOnThePage(daysOfTheWeek) {
    const weekSection = document.createElement('section');
    weekSection.classList.add('week__container');

    const weekHeader = document.createElement('h1');
    weekHeader.classList.add('week__header');
    weekHeader.textContent = `7-day Forecast`;

    weekSection.appendChild(weekHeader);

    for (const day of daysOfTheWeek) {
        const weekCard = document.createElement('div');
        weekCard.classList.add('week__card');

        const weekDayTitle = document.createElement('h2');
        weekDayTitle.classList.add('week__day');
        weekDayTitle.textContent = format(day.datetime, "E");

        const imgContainer = document.createElement('div');
        imgContainer.classList.add('img__container');

        const weekWeatherContainer = document.createElement('div');
        weekWeatherContainer.classList.add('week__weather');

        const weekWeatherIcon = document.createElement('img');
        weekWeatherIcon.src = '#';
        weekWeatherIcon.alt = 'icon';

        const weekDesc = document.createElement('p');
        weekDesc.classList.add('week__desc');
        weekDesc.textContent = day.conditions;

        imgContainer.append(weekWeatherIcon, weekDesc);
        weekWeatherContainer.append(weekDayTitle, imgContainer);

        const weekTempContainer = document.createElement('div');
        weekTempContainer.classList.add('week__temp');

        const weekTempMax = document.createElement('h1');
        weekTempMax.classList.add('temp__max');
        weekTempMax.textContent = (!tempMode.isCelsius) ? `${day.tempmax} F°` : `${day.tempmax} C°`;

        const weekDelimiter = document.createElement('span');
        weekDelimiter.classList.add('delimiter');
        weekDelimiter.textContent = '/';

        const weekTempMin = document.createElement('h2');
        weekTempMin.classList.add('temp__min');
        weekTempMin.textContent = day.tempmin;

        weekTempContainer.append(weekTempMax, weekDelimiter, weekTempMin);

        weekCard.append(weekWeatherContainer, weekTempContainer);

        weekSection.appendChild(weekCard);
        
    }

    return weekSection;
};
