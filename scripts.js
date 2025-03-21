// ✅ Mobile menu toggle (hamburger)
function toggleMenu() {
    const navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("active");

    // Close dropdowns on main toggle
    const dropdowns = document.querySelectorAll(".dropdown");
    dropdowns.forEach(dropdown => dropdown.classList.remove("active"));
}

// ✅ Enable dropdowns on click (mobile)
document.addEventListener("DOMContentLoaded", function () {
    const dropdown = document.querySelector(".dropdown");
    if (dropdown) {
        dropdown.addEventListener("click", function (event) {
            event.stopPropagation();
            dropdown.classList.toggle("active");
        });
    }

    // ✅ Fade-in services on scroll
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
    fadeInOnScroll();

    // ✅ Lazy load all images (SEO boost)
    const images = document.querySelectorAll("img");
    images.forEach(img => {
        img.setAttribute("loading", "lazy");
    });

    // ✅ Smooth scroll for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
});
