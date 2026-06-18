import { tempMode } from "../core/weather.js";

export const initDisplayConditionData =
  function initDisplayConditionDataOnThePage(
    feelsLike,
    windSpeed,
    uvIndex,
    dew,
  ) {
    const conditionSection = document.createElement("section");
    conditionSection.classList.add("condition__container");

    const conditionHeader = document.createElement("h1");
    conditionHeader.classList.add("condition__header");
    conditionHeader.textContent = "Current conditions";

    const realFeelCard = document.createElement("div");
    realFeelCard.classList.add("condition__card");

    const realFeelTitle = document.createElement("h1");
    realFeelTitle.classList.add("condition__title");
    realFeelTitle.textContent = "Feel Temperature";

    const realFeelDesc = document.createElement("p");
    realFeelDesc.classList.add("condition__desc", "real__feel");
    realFeelDesc.textContent = !tempMode.isCelsius
      ? `${feelsLike} F°`
      : `${feelsLike} C°`;

    realFeelCard.append(realFeelTitle, realFeelDesc);

    const windSpeedCard = document.createElement("div");
    windSpeedCard.classList.add("condition__card");

    const windSpeedTitle = document.createElement("h1");
    windSpeedTitle.classList.add("condition__title");
    windSpeedTitle.textContent = "Wind Speed";

    const windSpeedDesc = document.createElement("p");
    windSpeedDesc.classList.add("condition__desc", "wind");
    windSpeedDesc.textContent = `${windSpeed} km/h`;

    windSpeedCard.append(windSpeedTitle, windSpeedDesc);

    const uvIndexCard = document.createElement("div");
    uvIndexCard.classList.add("condition__card");

    const uvIndexTitle = document.createElement("h1");
    uvIndexTitle.classList.add("condition__title");
    uvIndexTitle.textContent = "UV Index";

    const uvIndexDesc = document.createElement("p");
    uvIndexDesc.classList.add("condition__desc", "uv");
    uvIndexDesc.textContent = uvIndex;

    uvIndexCard.append(uvIndexTitle, uvIndexDesc);

    const dewCard = document.createElement("div");
    dewCard.classList.add("condition__card");

    const dewTitle = document.createElement("h1");
    dewTitle.classList.add("condition__title");
    dewTitle.textContent = "Dew";

    const dewDesc = document.createElement("p");
    dewDesc.classList.add("condition__desc", "dew");
    dewDesc.textContent = !tempMode.isCelsius ? `${dew} F°` : `${dew} C°`;

    dewCard.append(dewTitle, dewDesc);

    conditionSection.append(
      conditionHeader,
      realFeelCard,
      windSpeedCard,
      uvIndexCard,
      dewCard,
    );

    return conditionSection;
  };

export const displayExistingConditionData =
  function displayExistingConditionDataOnThePage(
    feelsLike,
    windSpeed,
    uvIndex,
    dew,
  ) {
    const windSpeedDesc = document.querySelector(".condition__desc.wind");
    windSpeedDesc.textContent = `${windSpeed} km/h`;

    const uvIndexDesc = document.querySelector(".condition__desc.uv");
    uvIndexDesc.textContent = uvIndex;

    const realFeelDesc = document.querySelector(".condition__desc.real__feel");
    realFeelDesc.textContent = !tempMode.isCelsius
      ? `${feelsLike} F°`
      : `${feelsLike} C°`;

    const dewDesc = document.querySelector(".condition__desc.dew");
    dewDesc.textContent = !tempMode.isCelsius ? `${dew} F°` : `${dew} C°`;
  };
