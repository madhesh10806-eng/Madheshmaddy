// =====================================
// PSV CareerAI JavaScript
// =====================================

// LOADER

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.classList.add("loader-hide");

    }, 2500);

});

// =====================================
// COUNTER ANIMATION
// =====================================

const counters = document.querySelectorAll(".counter");

const startCounter = () => {

    counters.forEach(counter => {

        const target = +counter.dataset.target;

        let count = 0;

        const speed = target / 100;

        const update = () => {

            count += speed;

            if (count < target) {

                counter.innerText = Math.floor(count);

                requestAnimationFrame(update);

            } else {

                counter.innerText = target + "+";

            }

        };

        update();

    });

};

const statsSection = document.querySelector(".stats-section");

let started = false;

window.addEventListener("scroll", () => {

    if (!statsSection) return;

    const sectionTop = statsSection.offsetTop - 500;

    if (window.scrollY > sectionTop && !started) {

        startCounter();

        started = true;

    }

});
// =====================================
// SCROLL REVEAL ANIMATION
// =====================================

const reveals = document.querySelectorAll(
".feature-card, .career-card, .dashboard-card, .stats-card, .testimonial-card, .contact-card"
);

function revealOnScroll() {

    reveals.forEach((element) => {

        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {

            element.style.opacity = "1";
            element.style.transform = "translateY(0)";

        }

    });

}

reveals.forEach((element) => {

    element.style.opacity = "0";
    element.style.transform = "translateY(60px)";
    element.style.transition = "all .8s ease";

});

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


// =====================================
// NAVBAR SCROLL EFFECT
// =====================================

const navbar = document.querySelector(".glass-navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        navbar.style.background = "rgba(5,10,25,.95)";
        navbar.style.padding = "10px 0";
        navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,.4)";

    }else{

        navbar.style.background = "rgba(10,15,35,.65)";
        navbar.style.padding = "15px 0";
        navbar.style.boxShadow = "none";

    }

});
// =====================================
// DARK / LIGHT MODE
// =====================================

const themeBtn = document.getElementById("themeToggle");

if (themeBtn) {

    themeBtn.addEventListener("click", () => {

        document.body.classList.toggle("light-mode");

        if (document.body.classList.contains("light-mode")) {

            localStorage.setItem("theme", "light");

            themeBtn.innerHTML = '<i class="bi bi-moon-stars-fill"></i>';

        } else {

            localStorage.setItem("theme", "dark");

            themeBtn.innerHTML = '<i class="bi bi-sun-fill"></i>';

        }

    });

}

if (localStorage.getItem("theme") === "light") {

    document.body.classList.add("light-mode");

}
// =====================================
// CURSOR GLOW EFFECT
// =====================================

const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove",(e)=>{

    if(glow){

        glow.style.left = e.clientX + "px";
        glow.style.top = e.clientY + "px";

    }

});
// =====================================
// SCROLL TO TOP
// =====================================

const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

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
// =====================================
// TYPING ANIMATION
// =====================================

const words = [
    "Artificial Intelligence",
    "Software Development",
    "Cyber Security",
    "Cloud Computing",
    "Data Science",
    "UI / UX Design"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typingText = document.getElementById("typing-text");

function typeEffect() {

    if (!typingText) return;

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingText.textContent =
            currentWord.substring(0, charIndex++);

        if (charIndex > currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;

        }

    } else {

        typingText.textContent =
            currentWord.substring(0, charIndex--);

        if (charIndex < 0) {

            deleting = false;

            wordIndex = (wordIndex + 1) % words.length;

        }

    }

    setTimeout(typeEffect, deleting ? 50 : 100);

}

typeEffect();
// =====================================
// AI CHAT
// =====================================

const chatBtn = document.getElementById("chatBtn");
const chatBox = document.getElementById("chatBox");
const closeChat = document.getElementById("closeChat");

if (chatBtn && chatBox && closeChat) {

    chatBtn.addEventListener("click", () => {
        chatBox.style.display = "block";
    });

    closeChat.addEventListener("click", () => {
        chatBox.style.display = "none";
    });

}

const chatInput = document.querySelector(".chat-footer input");
const sendBtn = document.querySelector(".chat-footer button");
const chatBody = document.querySelector(".chat-body");

function sendMessage() {

    const message = chatInput.value.trim();

    if (message === "") return;

    chatBody.innerHTML += `
        <p><strong>You:</strong> ${message}</p>
    `;

    let reply = "Sorry, I don't understand that question.";

    const text = message.toLowerCase();

    if (text.includes("course")) {
        reply = "We offer AI, Web Development, Python, Java, Cloud Computing and Cyber Security.";
    }
    else if (text.includes("placement")) {
        reply = "PSV CareerAI helps students prepare for placements with mock interviews and skill tracking.";
    }
    else if (text.includes("python")) {
        reply = "Python is one of the best languages for AI, automation and backend development.";
    }
    else if (text.includes("html")) {
        reply = "HTML is used to build the structure of web pages.";
    }
    else if (text.includes("css")) {
        reply = "CSS is used to style and make websites attractive.";
    }
    else if (text.includes("javascript")) {
        reply = "JavaScript adds interactivity and animations to websites.";
    }
    else if (text.includes("hello") || text.includes("hi")) {
        reply = "Hello 👋 Welcome to PSV CareerAI!";
    }

    setTimeout(() => {

        chatBody.innerHTML += `
            <p><strong>AI:</strong> ${reply}</p>
        `;

        chatBody.scrollTop = chatBody.scrollHeight;

    }, 600);

    chatInput.value = "";

}

if (sendBtn && chatInput) {

    sendBtn.addEventListener("click", sendMessage);

    chatInput.addEventListener("keypress", function(e) {

        if (e.key === "Enter") {

            sendMessage();

        }

    });

}

