document.addEventListener('DOMContentLoaded', () => {
    // Menu
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    const toggleMenu = () => {
        nav.classList.toggle('nav-active');
        burger.classList.toggle('toggle');
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
    }

    burger.addEventListener('click', toggleMenu);
    navLinks.forEach(link => {
        link.addEventListener('click', () => { if(nav.classList.contains('nav-active')) toggleMenu(); });
    });

    // Animation au scroll (Apparition vidéo)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 }); // Se déclenche dès que 10% de la section est visible

    document.querySelectorAll('.reveal').forEach(section => observer.observe(section));
});
