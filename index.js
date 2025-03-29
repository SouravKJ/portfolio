// Select the necessary elements
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

// Function to handle scroll event and add active class to the correct nav link
window.onscroll = () => {
    let top = window.scrollY; // Current scroll position

    sections.forEach(sec => {
        let offset = sec.offsetTop - 150; // Offset to trigger active class
        let height = sec.offsetHeight; // Height of each section
        let id = sec.getAttribute('id'); // Get the id of the section

        // Check if the current scroll position is within the section
        if (top >= offset && top < offset + height) {
            // Remove 'active' class from all nav links
            navLinks.forEach(link => {
                link.classList.remove('active');
            });

            // Add 'active' class to the nav link with matching href
            let activeLink = document.querySelector(`header nav a[href="#${id}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });
};
// Select the menu icon and navbar
const menuIcon = document.getElementById("menu");
const navbar = document.getElementById("navbar");

// Toggle menu icon and navbar
menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x"); // Change icon to 'X'
    navbar.classList.toggle("active"); // Show/hide navbar
};
