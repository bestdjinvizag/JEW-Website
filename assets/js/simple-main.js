document.addEventListener('DOMContentLoaded', () => {
    // Select Elements
    const menuToggle = document.querySelector('[data-menu-toggle]');
    const menuWrap = document.querySelector('[data-menu-wrap]');
    const menuLinks = document.querySelectorAll('[data-menu-item]');

    // Safety check
    if (!menuToggle || !menuWrap) return;

    // Toggle Function
    const toggleMenu = () => {
        const isOpen = menuWrap.classList.contains('is-open');

        if (isOpen) {
            menuWrap.classList.remove('is-open');
            menuToggle.classList.remove('is-active'); // For button animation if needed
            document.body.style.overflow = ''; // Restore scrolling
        } else {
            menuWrap.classList.add('is-open');
            menuToggle.classList.add('is-active');
            document.body.style.overflow = 'hidden'; // Lock scrolling
        }
    };

    // Event Listener
    menuToggle.addEventListener('click', toggleMenu);

    // Close menu when a link is clicked
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuWrap.classList.remove('is-open');
            menuToggle.classList.remove('is-active');
            document.body.style.overflow = '';
        });
    });

    console.log('Simple Main JS Loaded: Menu system active.');
});
