document.addEventListener('DOMContentLoaded', () => {
    
    // --- GESTION DU MENU MOBILE ---
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    // Fonction pour basculer le menu
    const toggleMenu = () => {
        nav.classList.toggle('nav-active');
        burger.classList.toggle('toggle');

        // Animation des liens (effet domino)
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
    }

    burger.addEventListener('click', toggleMenu);

    // Fermer le menu quand on clique sur un lien (UX essentiel sur mobile)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if(nav.classList.contains('nav-active')){
                toggleMenu();
            }
        });
    });


    // --- EFFETS VISUELS "SCROLL REVEAL" (Style Vidéo) ---
    // Cela permet aux éléments d'apparaître doucement quand on scrolle
    const observerOptions = {
        threshold: 0.2 // L'élément doit être visible à 20% pour s'animer
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    // On cible toutes les sections avec la classe .reveal
    document.querySelectorAll('.reveal').forEach(section => {
        observer.observe(section);
    });

});
