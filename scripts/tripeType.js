export function initTripType() {
    const tripRadios = document.querySelectorAll('input[name="trip"]');
    const returnItem = document.getElementById('return-item');
    const arrivalInput = document.querySelector('#arrival-station .station-display');

    tripRadios.forEach(radio => {
        radio.addEventListener('change', () => {
            if (radio.value === "0") { // ONE WAY
                // Bloqueamos arrival
                returnItem.classList.add("return-disabled");
                arrivalInput.disabled = true;
                arrivalInput.value = ""; // limpiar valor
                arrivalInput.style.backgroundColor = "#f0f0f0"; // gris
            } else { // ROUND TRIP
                returnItem.classList.remove("return-disabled");
                arrivalInput.disabled = false;
                arrivalInput.style.backgroundColor = "white"; // vuelve a activo
            }
        });
    });
}