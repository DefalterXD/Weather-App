export const tempMode = {
    isCelsius: false,
    cityReference: ''
};

export const getLocation = async function getLocationFromAPI(location) {
    try {
        const dataLocation = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=W3KQHZNRSNUWH75XWU46P53YY`);
        if(!dataLocation.ok) {
            console.error('The request was not found');
        } 
        const json = await dataLocation.json();
        const processedData = jsonDataProcessing(json);
        return processedData;
    } catch(error) {
        console.log(error);
    }
};

const jsonDataProcessing = function jsonDataProcessingToObj(locationJson) {
    const { resolvedAddress } = locationJson;
    const { conditions, icon, feelslike, temp, uvindex, windspeed } = locationJson.currentConditions;
    const firstWeekDays = locationJson.days.filter((day, index) => index < 7);

    return { resolvedAddress, conditions, icon, feelslike, temp, uvindex, windspeed, firstWeekDays };
};
