// ✅ Mobile menu toggle (hamburger)
function toggleMenu() {
    const navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("active");

    // Close all dropdowns when toggling the mobile menu
    document.querySelectorAll(".dropdown").forEach(dropdown => {
        dropdown.classList.remove("active");
    });
}

document.addEventListener("DOMContentLoaded", function () {

    // ✅ Enable dropdown menus to toggle on click (better mobile UX)
    document.querySelectorAll(".dropdown > a").forEach(dropdownToggle => {
        dropdownToggle.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent immediate navigation
            const dropdown = this.parentElement;
            dropdown.classList.toggle("active");
        });
    });

    // ✅ Close dropdown menus when clicking outside
    document.addEventListener("click", function(event) {
        if (!event.target.closest(".dropdown")) {
            document.querySelectorAll(".dropdown").forEach(dropdown => {
                dropdown.classList.remove("active");
            });
        }
    });

    // ✅ Fade-in
