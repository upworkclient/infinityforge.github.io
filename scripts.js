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

// ✅ Tooltip follow the cursor
const tooltip = document.getElementById('tooltip-follow');

document.querySelectorAll('.process-step').forEach(step => {
    step.addEventListener('mouseenter', () => {
        tooltip.innerText = step.getAttribute('data-tooltip');
        tooltip.style.display = 'block';
    });

    step.addEventListener('mousemove', e => {
        let posX = e.pageX + 15;
        let posY = e.pageY + 15;

        const tooltipWidth = tooltip.offsetWidth;
        const tooltipHeight = tooltip.offsetHeight;

        // Prevent tooltip from overflowing the viewport
        if (posX + tooltipWidth > window.innerWidth) {
            posX = window.innerWidth - tooltipWidth - 10;
        }
        if (posY + tooltipHeight > window.innerHeight) {
            posY = window.innerHeight - tooltipHeight - 10;
        }

        tooltip.style.left = `${posX}px`;
        tooltip.style.top = `${posY}px`;
    });

    step.addEventListener('mouseleave', () => {
        tooltip.style.display = 'none';
    });
});

