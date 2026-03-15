import { initCalendar } from "./calendar.js";
import { initStationSelector } from "./stationSelector.js";
import { initPersons } from "./persons.js";
import { initBookingData } from "./bookingData.js";
import { initTripType } from "./tripeType.js";

document.addEventListener("DOMContentLoaded", () => {

    initCalendar();
    initStationSelector();
    initTripType();
    initPersons();
    initBookingData();

     // --- Reset calendar when trip type changes ---
     const tripRadios = document.querySelectorAll('input[name="trip"]');
     const calendar = document.querySelector('.calendar');
     const departItem = document.querySelector('#depart-item');
     const returnItem = document.querySelector('#return-item');
});