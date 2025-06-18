/* ============================ SHOW/HIDE MOBILE NAV MENU ============================ */
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');

// Show menu
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show-menu');
    });
}

// Hide menu when a link is clicked
function linkAction() {
    navMenu.classList.remove('show-menu');
}
navLinks.forEach(n => n.addEventListener('click', linkAction));


/* ============================ CHANGE HEADER BACKGROUND ON SCROLL ============================ */
function scrollHeader() {
    const header = document.getElementById('header');
    // When the scroll is greater than 50 viewport height, add the scroll-header class
    if (this.scrollY >= 50) {
        header.classList.add('header-scrolled');
    } else {
        header.classList.remove('header-scrolled');
    }
}
window.addEventListener('scroll', scrollHeader);

/* ============================ SMOOTH SCROLL FOR ALL LINKS ============================ */
// This script provides smooth scrolling for all anchor links.
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

/* ============================ ACTIVE NAV LINK HIGHLIGHT ON SCROLL ============================ */
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58; // 58px header height
        const sectionId = current.getAttribute('id');
        const correspondingLink = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

        if (correspondingLink) {
             if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                correspondingLink.classList.add('active-link');
            } else {
                correspondingLink.classList.remove('active-link');
            }
        }
    });
}
window.addEventListener('scroll', scrollActive);


/* ============================ SIMPLE CLIENT-SIDE FORM VALIDATION ============================ */
const bookingForm = document.getElementById('booking-form');

if (bookingForm) {
    bookingForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent actual submission for this demo

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const datetime = document.getElementById('datetime').value;
        const service = document.getElementById('service').value;

        if (name === '' || email === '' || datetime === '' || service === '') {
            alert('Por favor, completa todos los campos para realizar la reserva.');
            return;
        }

        // Basic email format validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert('Por favor, ingresa un email válido.');
            return;
        }
        
        // On successful validation
        alert(`¡Gracias, ${name}! Tu turno para ${service} fue solicitado. Te contactaremos por email para confirmar.`);
        
        // Here you would typically send the form data to a server
        // e.g., using fetch() API
        
        bookingForm.reset(); // Clear the form
    });
}