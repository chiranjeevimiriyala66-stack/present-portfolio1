const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {
            current = section.id;
        }
    });

    navLinks.forEach((link) => {
        link.classList.toggle(
            "active",
            link.getAttribute("href") === `#${current}`
        );
    });
});

// Pause Orbit Animation
const orbit = document.querySelector(".orbit");

if (orbit) {
    orbit.addEventListener("mouseenter", () => {
        orbit.style.animationPlayState = "paused";
    });

    orbit.addEventListener("mouseleave", () => {
        orbit.style.animationPlayState = "running";
    });

    // Mobile Touch Support
    orbit.addEventListener("touchstart", () => {
        orbit.style.animationPlayState = "paused";
    });

    orbit.addEventListener("touchend", () => {
        orbit.style.animationPlayState = "running";
    });
}