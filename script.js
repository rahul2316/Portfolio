// Smooth Scroll for Navigation Links
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        target.scrollIntoView({ behavior: "smooth" });

        // Close the menu after clicking a link
        const navMenu = document.getElementById("nav-menu");
        navMenu.classList.remove("active");
    });
});

// Reveal Sections on Scroll
const sections = document.querySelectorAll("section");
const options = { threshold: 0.2 };
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = "translateY(0)";
        }
    });
}, options);

sections.forEach(section => {
    section.style.opacity = 0;
    section.style.transform = "translateY(50px)";
    section.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
    observer.observe(section);
});

// Typing Effect
document.addEventListener("DOMContentLoaded", function () {
    const text = "Hi, I'm Rahul Chandwani";
    let index = 0;
    const speed = 100; // Typing speed in milliseconds
    const typingTextElement = document.getElementById("typing-text");

    function type() {
        if (index < text.length) {
            typingTextElement.textContent += text.charAt(index);
            index++;
            setTimeout(type, speed);
        }
    }

    type();
});

// Toggle Menu
document.getElementById("menu-toggle").addEventListener("click", function () {
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.toggle("active");
});
