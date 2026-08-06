/*=========================================
        SIDEBAR
=========================================*/

const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");
const closeMenu = document.getElementById("closeMenu");

menuBtn.addEventListener("click", () => {
    sidebar.classList.add("active");
});

closeMenu.addEventListener("click", () => {
    sidebar.classList.remove("active");
});

/* Close sidebar when clicking outside */

document.addEventListener("click", (e) => {

    if (
        !sidebar.contains(e.target) &&
        !menuBtn.contains(e.target)
    ) {
        sidebar.classList.remove("active");
    }

});

/*=========================================
        TYPING EFFECT
=========================================*/

const typingText = document.getElementById("typing-text");

const words = [
    "Software Developer",
    "Frontend Developer",
    "Python Developer",
    "Java Developer",
    "Full Stack Developer"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const current = words[wordIndex];

    if (!deleting) {

        typingText.textContent =
            current.substring(0, charIndex++);

        if (charIndex > current.length) {

            deleting = true;

            setTimeout(typeEffect, 1200);

            return;

        }

    } else {

        typingText.textContent =
            current.substring(0, charIndex--);

        if (charIndex < 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {

                wordIndex = 0;

            }

        }

    }

    setTimeout(typeEffect, deleting ? 50 : 100);

}

typeEffect();
/*=========================================
        SCROLL TO TOP
=========================================*/

const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        scrollBtn.style.display = "block";

    } else {

        scrollBtn.style.display = "none";

    }

});

scrollBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

/*=========================================
        SCROLL REVEAL
=========================================*/

const revealElements = document.querySelectorAll(
".language-card, .tool-card, .career-card, .company-card, .resource-card, .roadmap-item"
);

function revealOnScroll() {

    revealElements.forEach((element) => {

        const windowHeight = window.innerHeight;

        const revealTop = element.getBoundingClientRect().top;

        const revealPoint = 100;

        if (revealTop < windowHeight - revealPoint) {

            element.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

/*=========================================
        SMOOTH SCROLL
=========================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target=document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

/*=========================================
        CLOSE SIDEBAR AFTER CLICK
=========================================*/

document.querySelectorAll(".sidebar a").forEach(link=>{

    link.addEventListener("click",()=>{

        sidebar.classList.remove("active");

    });

});
