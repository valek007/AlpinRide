export function initBurgerMenu() {
    const burgerBtn = document.querySelector('.header__burger-menu');
    const menu = document.querySelector('.header__menu');

    if (burgerBtn && menu) {
        burgerBtn.addEventListener('click', (e) => {
            e.stopPropagation(); 
            menu.classList.toggle('active');
        });

        const links = menu.querySelectorAll('.header__list-item');
        links.forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.remove('active');
            });
        });

        document.addEventListener('click', (e) => {
            if (!menu.contains(e.target) && !burgerBtn.contains(e.target)) {
                menu.classList.remove('active');
            }
        });
    }
}