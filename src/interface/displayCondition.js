export const displayConditionData = function displayConditionDataOnThePage(feelsLike, windSpeed, uvIndex, dew) {
    const conditionSection = document.createElement('section');
    conditionSection.classList.add('condition__container');

    const conditionHeader = document.createElement('h1');
    conditionHeader.classList.add('condition__header');
    conditionHeader.textContent = 'Current conditions';

    const realFeelCard = document.createElement('div');
    realFeelCard.classList.add('condition__card');

    const realFeelTitle = document.createElement('h1');
    realFeelTitle.classList.add('condition__title');
    realFeelTitle.textContent = 'Feel Temperature';

    const realFeelDesc = document.createElement('p');
    realFeelDesc.classList.add('condition__desc');
    realFeelDesc.textContent = feelsLike;

    realFeelCard.append(realFeelTitle, realFeelDesc);

    const windSpeedCard = document.createElement('div');
    windSpeedCard.classList.add('condition__card');

    const windSpeedTitle = document.createElement('h1');
    windSpeedTitle.classList.add('condition__title');
    windSpeedTitle.textContent = 'Wind Speed';

    const windSpeedDesc = document.createElement('p');
    windSpeedDesc.classList.add('condition__desc');
    windSpeedDesc.textContent = `${windSpeed} km/h`;

    windSpeedCard.append(windSpeedTitle, windSpeedDesc);

    const uvIndexCard = document.createElement('div');
    uvIndexCard.classList.add('condition__card');

    const uvIndexTitle = document.createElement('h1');
    uvIndexTitle.classList.add('condition__title');
    uvIndexTitle.textContent = 'UV Index';

    const uvIndexDesc = document.createElement('p');
    uvIndexDesc.classList.add('condition__desc');
    uvIndexDesc.textContent = uvIndex;

    uvIndexCard.append(uvIndexTitle, uvIndexDesc);

    const dewCard = document.createElement('div');
    dewCard.classList.add('condition__card');

    const dewTitle = document.createElement('h1');
    dewTitle.classList.add('condition__title');
    dewTitle.textContent = 'Dew';

    const dewDesc = document.createElement('p');
    dewDesc.classList.add('condition__desc');
    dewDesc.textContent = dew;

    dewCard.append(dewTitle, dewDesc);

    conditionSection.append(conditionHeader, realFeelCard, windSpeedCard, uvIndexCard, dewCard);
    
    return conditionSection;
};
