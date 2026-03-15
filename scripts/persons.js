export function initPersons() {
    const minusBtn = document.querySelector('.main__counter-btn:first-of-type');
    const plusBtn = document.querySelector('.main__counter-btn:last-of-type');
    const counterDisplay = document.querySelector('.main__counter');

    let passengers = parseInt(counterDisplay.textContent) || 1;
    counterDisplay.textContent = passengers;

    function updateButtons() {
        minusBtn.disabled = passengers <= 1;
    }

    minusBtn.addEventListener('click', () => {
        if (passengers > 1) passengers--;
        counterDisplay.textContent = passengers;
        updateButtons();
    });

    plusBtn.addEventListener('click', () => {
        passengers++;
        counterDisplay.textContent = passengers;
        updateButtons();
    });

    // Init state
    updateButtons();
}