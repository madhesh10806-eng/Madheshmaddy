
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

"UI Designer",

"UX Designer",

"Product Designer",

"Creative Designer",

"Interaction Designer",

"Mobile App Designer",

"Web Designer"

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

window.addEventListener("scroll",()=>{

if(window.scrollY>300){

scrollBtn.style.display="block";

}else{

scrollBtn.style.display="none";

}

});

scrollBtn.addEventListener("click",()=>{

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

const windowHeight=window.innerHeight;

const revealTop=element.getBoundingClientRect().top;

const revealPoint=100;

if(revealTop<windowHeight-revealPoint){

element.classList.add("active");

}

});

}

window.addEventListener("scroll",revealElements);

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
        PAGE LOAD
=========================================*/

window.addEventListener("load",()=>{

document.body.style.opacity="1";

});

/*=========================================
        CURSOR GLOW
=========================================*/

const cursor=document.querySelector(".cursor-glow");

document.addEventListener("mousemove",(e)=>{

if(cursor){

cursor.style.left=e.clientX+"px";

cursor.style.top=e.clientY+"px";

}

});

/*=========================================
        3D CARD TILT
=========================================*/

const cards=document.querySelectorAll(
".glass-card,.tool-card,.principle-card,.career-card,.company-card,.compare-card"
);

cards.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

const rotateY=(x-rect.width/2)/18;

const rotateX=(rect.height/2-y)/18;

card.style.transform=
`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform="perspective(1000px) rotateX(0) rotateY(0)";

});

});

/*=========================================
        HERO FLOATING EFFECT
=========================================*/

const heroDesign=document.querySelector(".hero-design");

window.addEventListener("mousemove",(e)=>{

if(heroDesign){

const x=(window.innerWidth/2-e.clientX)/40;

const y=(window.innerHeight/2-e.clientY)/40;

heroDesign.style.transform=`translate(${x}px,${y}px)`;

}

});
