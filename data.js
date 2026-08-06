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

"Data Scientist",

"Data Analyst",

"Machine Learning Engineer",

"Data Engineer",

"Business Analyst",

"AI Researcher",

"Analytics Expert"

];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typingEffect(){

const current = words[wordIndex];

if(!deleting){

typingText.textContent = current.substring(0,charIndex++);

if(charIndex > current.length){

deleting = true;

setTimeout(typingEffect,1200);

return;

}

}else{

typingText.textContent = current.substring(0,charIndex--);

if(charIndex < 0){

deleting = false;

wordIndex++;

if(wordIndex >= words.length){

wordIndex = 0;

}

}

}

setTimeout(typingEffect,deleting ? 50 : 100);

}

typingEffect();

/*=========================================
        SCROLL TO TOP
=========================================*/

const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {

if(window.scrollY > 300){

scrollBtn.style.display = "block";

}else{

scrollBtn.style.display = "none";

}

});

scrollBtn.addEventListener("click", () => {

window.scrollTo({

top:0,

behavior:"smooth"

});

});
/*=========================================
        SCROLL REVEAL
=========================================*/

const reveals = document.querySelectorAll(".reveal");

function revealElements(){

reveals.forEach((element)=>{

const windowHeight = window.innerHeight;

const revealTop = element.getBoundingClientRect().top;

const revealPoint = 100;

if(revealTop < windowHeight - revealPoint){

element.classList.add("active");

}

});

}

window.addEventListener("scroll", revealElements);

revealElements();

/*=========================================
        SMOOTH SCROLL
=========================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

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
        AUTO CLOSE SIDEBAR
=========================================*/

document.querySelectorAll(".sidebar a").forEach(link=>{

link.addEventListener("click",()=>{

sidebar.classList.remove("active");

});

});

/*=========================================
        PAGE LOAD ANIMATION
=========================================*/

window.addEventListener("load",()=>{

document.body.style.opacity="1";

});

/*=========================================
        HERO BUTTON ANIMATION
=========================================*/

const heroBtn=document.querySelector(".hero-btn");

if(heroBtn){

heroBtn.addEventListener("mouseenter",()=>{

heroBtn.style.transform="translateY(-6px) scale(1.05)";

});

heroBtn.addEventListener("mouseleave",()=>{

heroBtn.style.transform="translateY(0) scale(1)";

});

}

/*=========================================
        CARD HOVER EFFECT
=========================================*/

const cards=document.querySelectorAll(
".ai-card,.language-card,.tool-card,.career-card,.company-card,.resource-card,.flow-box"
);

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-12px)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0)";

});

});
