export function initFindRide() {
    const findBtn = document.getElementById('find-ride');
    const modal = document.getElementById('custom-alert');
    const closeBtn = document.getElementById('close-modal');

    if (findBtn && modal) {
        findBtn.addEventListener('click', () => {
            // Aquí puedes añadir tus validaciones de inputs
            // Si todo está OK:
            modal.style.display = 'flex';
        });

        // Cerrar al pulsar el botón
        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        // Cerrar si pulsan fuera de la caja blanca
        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    }
}