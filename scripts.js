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

    // ✅ Fade-in services smoothly on scroll
    const serviceItems = document.querySelectorAll(".service-item");

    function fadeInOnScroll() {
        serviceItems.forEach(item => {
            const rect = item.getBoundingClientRect();
            if (rect.top < window.innerHeight - 50) {
                item.style.opacity = "1";
                item.style.transform = "translateY(0)";
            }
        });
    }

    window.addEventListener("scroll", fadeInOnScroll);
    fadeInOnScroll(); // Trigger immediately on load

    // ✅ Lazy load images (SEO and performance improvement)
    document.querySelectorAll("img").forEach(img => {
        img.setAttribute("loading", "lazy");
    });

    // ✅ Smooth scroll animation for internal anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
});
