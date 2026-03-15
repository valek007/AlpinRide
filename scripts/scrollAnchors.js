export function initScrollAnchors() {
    // Buscamos todos los items que tengan los textos específicos
    const menuItems = document.querySelectorAll('.header__list-item');

    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            const text = item.innerText.toLowerCase().trim();

            if (text.includes('faq')) {
                document.getElementById('faq-section').scrollIntoView({ behavior: 'smooth' });
            } 
            else if (text.includes('contact')) {
                document.getElementById('contact-section').scrollIntoView({ behavior: 'smooth' });
            } 
            else if (text.includes('mobile app')) {
                document.getElementById('download-section').scrollIntoView({ behavior: 'smooth' });
            }

            // Si es el menú burger, lo cerramos después de hacer clic
            const burgerMenu = document.querySelector('.header__menu');
            if (burgerMenu) {
                burgerMenu.classList.remove('active');
            }
        });
    });
}