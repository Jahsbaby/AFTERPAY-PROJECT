document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.contact-form');
    
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Thank you! We will get in touch with you soon.');
        form.reset();
    });
});
