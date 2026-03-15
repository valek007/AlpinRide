export function initFAQ() {
    const faqItems = document.querySelectorAll('.faq__item');
    
    console.log("Buscando FAQs...", faqItems); 

    faqItems.forEach(item => {
        item.addEventListener('click', () => {
            console.log("Click detectado en FAQ");
            
            faqItems.forEach(otherItem => {
                if (otherItem !== item) otherItem.classList.remove('active');
            });

            item.classList.toggle('active');
        });
    });
}