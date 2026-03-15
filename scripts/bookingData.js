export function initBookingData() {
    const findBtn = document.querySelector('.main__btn');

    findBtn.addEventListener('click', () => {
        // --- Trip Type ---
        const tripType = document.querySelector('input[name="trip"]:checked').value === "1" ? "Round Trip" : "One Way";

        // --- Stations ---
        const departStation = document.querySelector('.depart-item .station-display').value.trim();
        const arrivalStation = tripType === "Round Trip"
            ? document.querySelector('.return-item .station-display').value.trim()
            : null;

        // --- Dates ---
        const departDateEl = document.querySelector('#depart-item span');
        const returnDateEl = document.querySelector('#return-item span');

        const departDate = departDateEl ? departDateEl.textContent.trim() : null;
        const returnDate = tripType === "Round Trip" && returnDateEl ? returnDateEl.textContent.trim() : null;

        // --- Passengers ---
        const passengers = parseInt(document.querySelector('.main__counter').textContent.trim()) || 1;

        // --- Build booking object ---
        const bookingData = {
            tripType,
            departStation,
            arrivalStation,
            departDate,
            returnDate,
            passengers
        };

        console.log("Booking Data:", bookingData);
    });
}