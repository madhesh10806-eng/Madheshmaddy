/*=========================================
        SIDEBAR
=========================================*/

const menuBtn=document.getElementById("menuBtn");

const sidebar=document.getElementById("sidebar");

const closeBtn=document.getElementById("closeBtn");

menuBtn.addEventListener("click",()=>{

sidebar.classList.add("active");

});

closeBtn.addEventListener("click",()=>{

sidebar.classList.remove("active");

});

document.addEventListener("click",(e)=>{

if(!sidebar.contains(e.target) &&

!menuBtn.contains(e.target)){

sidebar.classList.remove("active");

}

});

/*=========================================
        SCROLL TO TOP
=========================================*/

const scrollBtn=document.getElementById("scrollTopBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

scrollBtn.style.display="flex";

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
        CURSOR GLOW
=========================================*/

const glow=document.querySelector(".cursor-glow");

document.addEventListener("mousemove",(e)=>{

if(glow){

glow.style.left=e.clientX+"px";

glow.style.top=e.clientY+"px";

}

});

/*=========================================
        SCROLL REVEAL
=========================================*/

const revealElements=document.querySelectorAll(

".creator-card,.mission-card,.why-card,.coming-card,.cta-box"

);

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

},{

threshold:.2

});

revealElements.forEach(el=>{

el.style.opacity="0";

el.style.transform="translateY(60px)";

el.style.transition=".8s ease";

observer.observe(el);

});
/*=========================================
        FLOATING SAKURA EFFECT
=========================================*/

function createPetal(){

const petal=document.createElement("div");

petal.className="sakura";

petal.style.left=Math.random()*100+"vw";

petal.style.animationDuration=(8+Math.random()*8)+"s";

petal.style.opacity=Math.random();

petal.style.transform=`scale(${0.5+Math.random()})`;

document.body.appendChild(petal);

setTimeout(()=>{

petal.remove();

},16000);

}

setInterval(createPetal,1200);

/*=========================================
        SPARKLE EFFECT
=========================================*/

function sparkle(x,y){

const star=document.createElement("span");

star.innerHTML="✦";

star.style.position="fixed";

star.style.left=x+"px";

star.style.top=y+"px";

star.style.color="#8B5CF6";

star.style.fontSize=(10+Math.random()*10)+"px";

star.style.pointerEvents="none";

star.style.zIndex="9999";

star.style.transition="all .8s ease";

document.body.appendChild(star);

setTimeout(()=>{

star.style.transform="translateY(-40px) scale(0)";

star.style.opacity="0";

},50);

setTimeout(()=>{

star.remove();

},900);

}

document.addEventListener("mousemove",(e)=>{

if(Math.random()>0.85){

sparkle(e.clientX,e.clientY);

}

});

/*=========================================
        CARD TILT EFFECT
=========================================*/

const cards=document.querySelectorAll(

".creator-card,.mission-card,.why-card,.coming-card"

);

cards.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

const rotateY=((x/rect.width)-0.5)*12;

const rotateX=((rect.height/2-y)/rect.height)*12;

card.style.transform=

`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform="perspective(1000px) rotateX(0) rotateY(0)";

});

});

/*=========================================
        HERO FADE-IN
=========================================*/

window.addEventListener("load",()=>{

document.body.style.opacity="1";

document.body.style.transition="opacity .8s ease";

});


