import { initCalendar } from "./calendar.js";
import { initStationSelector } from "./stationSelector.js";
import { initPersons } from "./persons.js";
import { initBookingData } from "./bookingData.js";
import { initTripType } from "./tripeType.js";
import { initFAQ } from "./faqs.js";
import { initBurgerMenu } from "./burgerMenu.js";
import { initScrollAnchors } from "./scrollAnchors.js";
import { initFindRide } from "./findRide.js";

document.addEventListener("DOMContentLoaded", () => {

    initFAQ(); 
    initBurgerMenu();
    initScrollAnchors();  
    initFindRide();
    initCalendar();
    initStationSelector();
    initTripType();
    initPersons();
    initBookingData();
      

     const tripRadios = document.querySelectorAll('input[name="trip"]');
     const calendar = document.querySelector('.calendar');
     const departItem = document.querySelector('#depart-item');
     const returnItem = document.querySelector('#return-item');
});