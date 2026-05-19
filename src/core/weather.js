export const getLocation = async function getLocationFromAPI(location) {
    try {
        const dataLocation = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=W3KQHZNRSNUWH75XWU46P53YY`);
        if(!dataLocation.ok) {
            console.error('The request was not found');
        } 
        const json = await dataLocation.json();
        jsonDataProcessing(json);
    } catch(error) {
        console.log(error);
    }
};

const jsonDataProcessing = async function jsonDataProcessingToObj(locationJson) {
    console.log(locationJson, locationJson.address);
    // console.log(locationObj);
}
