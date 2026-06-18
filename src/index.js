import './reset.css';
import './style.css';
import './interface/searchCity.js';
import { renderPageFromLocalStorage, storageAvailable } from './core/localStorage.js';
import { hideLoading, showLoading } from './interface/loadingComponent.js';


document.addEventListener('DOMContentLoaded', () => {
    showLoading();
    if (storageAvailable('localStorage')) {
        if (localStorage.getItem('isCelsius') && localStorage.getItem('cityName')) {
            renderPageFromLocalStorage();
        } else {
            hideLoading();
        }
    } else {
        console.log("Sorry your browser doesn't support localStorage");
    }

});
