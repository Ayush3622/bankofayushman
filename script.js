// JavaScript for mobile menu toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

// Check if the elements exist before adding an event listener
if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', () => {
        // Toggles the 'hidden' class from Tailwind CSS
        mobileMenu.classList.toggle('hidden');
    });
}