/*=========================================
            SIDEBAR
=========================================*/

const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");
const closeBtn = document.getElementById("closeBtn");

menuBtn.addEventListener("click", () => {
    sidebar.classList.add("active");
});

closeBtn.addEventListener("click", () => {
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
        SCROLL TO TOP
=========================================*/

const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 350) {

        scrollBtn.style.display = "flex";

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
        CURSOR GLOW
=========================================*/

const cursorGlow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {

    if (cursorGlow) {

        cursorGlow.style.left = e.clientX + "px";

        cursorGlow.style.top = e.clientY + "px";

    }

});

/*=========================================
        SCROLL REVEAL
=========================================*/

const revealItems = document.querySelectorAll(

".contact-info,.contact-form,.service-card,.faq-item,.footer"

);

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

},{

threshold:0.2

});

revealItems.forEach(item=>{

item.style.opacity="0";

item.style.transform="translateY(70px)";

item.style.transition="all .8s ease";

observer.observe(item);

});
/*=========================================
        FLOATING SAKURA PETALS
=========================================*/

function createPetal(){

const petal=document.createElement("div");

petal.className="floating-petal";

petal.innerHTML="🌸";

petal.style.left=Math.random()*100+"vw";

petal.style.fontSize=(12+Math.random()*16)+"px";

petal.style.animationDuration=(8+Math.random()*5)+"s";

petal.style.opacity=Math.random();

document.body.appendChild(petal);

setTimeout(()=>{

petal.remove();

},14000);

}

setInterval(createPetal,700);

/*=========================================
        CURSOR SPARKLES
=========================================*/

function sparkle(x,y){

const star=document.createElement("div");

star.className="sparkle";

star.style.left=x+"px";

star.style.top=y+"px";

document.body.appendChild(star);

setTimeout(()=>{

star.remove();

},900);

}

document.addEventListener("mousemove",(e)=>{

if(Math.random()>0.88){

sparkle(e.clientX,e.clientY);

}

});

/*=========================================
        3D CARD TILT
=========================================*/

const cards=document.querySelectorAll(

".info-card,.service-card,.faq-item"

);

cards.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

const rotateX=((y-rect.height/2)/18);

const rotateY=((rect.width/2-x)/18);

card.style.transform=

`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform=

"perspective(1000px) rotateX(0) rotateY(0) scale(1)";

});

});

/*=========================================
        CONTACT FORM
=========================================*/

const form=document.querySelector("form");

if(form){

form.addEventListener("submit",(e)=>{

e.preventDefault();

const btn=form.querySelector(".send-btn");

btn.innerHTML=

'<i class="bi bi-check-circle-fill"></i> Message Sent';

btn.style.background=

"linear-gradient(135deg,#10B981,#22C55E)";

setTimeout(()=>{

btn.innerHTML=

'<i class="bi bi-send-fill"></i> Send Message';

btn.style.background=

"linear-gradient(135deg,#2563EB,#8B5CF6)";

form.reset();

},2500);

});

}

/*=========================================
        PAGE FADE IN
=========================================*/

window.addEventListener("load",()=>{

document.body.style.opacity="1";

});

