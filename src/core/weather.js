import { hideLoading } from "../interface/loadingComponent.js";

export const tempMode = {
  isCelsius: false,
  cityCelsius: "",
  cityFahrenheit: "",
  cityName: "",
};

export const getLocation = async function getLocationFromAPI(location) {
  try {
    const dataLocation = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=W3KQHZNRSNUWH75XWU46P53YY`,
    );
    if (!dataLocation.ok) {
      console.error("The request was not found");
    }
    const json = await dataLocation.json();
    const processedData = jsonDataProcessing(json);
    return processedData;
  } catch (error) {
    hideLoading();
    console.log(error);
  }
};

const jsonDataProcessing = function jsonDataProcessingToObj(locationJson) {
  const { resolvedAddress } = locationJson;
  let { conditions, icon, feelslike, temp, uvindex, windspeed } =
    locationJson.currentConditions;
  let firstWeekDays = locationJson.days.filter((day, index) => index < 7);

  feelslike = Math.round(feelslike);
  temp = Math.round(temp);
  for (const day of firstWeekDays) {
    day.dew = Math.round(day.dew);
    day.tempmax = Math.round(day.tempmax);
    day.tempmin = Math.round(day.tempmin);
    for (const hour of day.hours) {
      hour.temp = Math.round(hour.temp);
    }
  }
  return {
    resolvedAddress,
    conditions,
    icon,
    feelslike,
    temp,
    uvindex,
    windspeed,
    firstWeekDays,
  };
};

export const assignPropertiesFahrenheitToCelsius =
  function convertFahrenheitToCelsiusFromJSON(city) {
    city.feelslike = convertFahrenheitToCelsius(city.feelslike);
    city.temp = convertFahrenheitToCelsius(city.temp);
    for (const day of city.firstWeekDays) {
      day.dew = convertFahrenheitToCelsius(day.dew);
      day.tempmax = convertFahrenheitToCelsius(day.tempmax);
      day.tempmin = convertFahrenheitToCelsius(day.tempmin);
      for (const hour of day.hours) {
        hour.temp = convertFahrenheitToCelsius(hour.temp);
      }
    }
  };

const convertFahrenheitToCelsius = function convertFahrenheitToCelsiusFormula(
  value,
) {
  const celsiusResult = Math.round(((value - 32) * 5) / 9);

  return celsiusResult;
};
