// ✅ Mobile menu toggle (hamburger)
window.toggleMenu = function () {
    const navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("active");

    // Close all dropdowns when toggling the mobile menu
    document.querySelectorAll(".dropdown").forEach(dropdown => {
        dropdown.classList.remove("active");
    });

    // ✅ Update aria-expanded for accessibility
    const button = document.querySelector(".menu-toggle");
    const expanded = navLinks.classList.contains("active");
    button.setAttribute("aria-expanded", expanded);
};

// ✅ Combined DOMContentLoaded logic
document.addEventListener("DOMContentLoaded", function () {

    // ✅ Enable dropdown menus to toggle on click (better mobile UX)
    document.querySelectorAll(".dropdown > a").forEach(dropdownToggle => {
        dropdownToggle.addEventListener("click", function (event) {
            event.preventDefault();
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
    fadeInOnScroll();

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

    // ✅ Floating Tooltip that Follows Cursor on Process Steps
    const tooltip = document.getElementById("tooltip-follow");

    if (tooltip) {
        document.querySelectorAll(".process-step").forEach((step) => {
            step.addEventListener("mouseenter", () => {
                const message = step.getAttribute("data-tooltip");
                tooltip.textContent = message;
                tooltip.style.display = "block";
            });

            step.addEventListener("mousemove", (e) => {
                const tooltipWidth = tooltip.offsetWidth;
                const tooltipHeight = tooltip.offsetHeight;

                let posX = e.clientX + 15;
                let posY = e.clientY + 15;

                if (posX + tooltipWidth > window.innerWidth) {
                    posX = window.innerWidth - tooltipWidth - 10;
                }

                if (posY + tooltipHeight > window.innerHeight) {
                    posY = window.innerHeight - tooltipHeight - 10;
                }

                tooltip.style.left = `${posX}px`;
                tooltip.style.top = `${posY}px`;
            });

            step.addEventListener("mouseleave", () => {
                tooltip.style.display = "none";
            });
        });
    }
});
