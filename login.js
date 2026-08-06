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
        SHOW / HIDE PASSWORD
=========================================*/

const password = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");

togglePassword.addEventListener("click", () => {

    if(password.type==="password"){

        password.type="text";

        togglePassword.innerHTML=
        '<i class="bi bi-eye-slash-fill"></i>';

    }else{

        password.type="password";

        togglePassword.innerHTML=
        '<i class="bi bi-eye-fill"></i>';

    }

});

/*=========================================
        SCROLL TO TOP
=========================================*/

const scrollBtn=document.getElementById("scrollTopBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY>350){

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

const cursorGlow=document.querySelector(".cursor-glow");

document.addEventListener("mousemove",(e)=>{

if(cursorGlow){

cursorGlow.style.left=e.clientX+"px";

cursorGlow.style.top=e.clientY+"px";

}

});

/*=========================================
        PAGE FADE IN
=========================================*/

window.addEventListener("load",()=>{

document.body.style.opacity="1";

});
/*=========================================
        SCROLL REVEAL
=========================================*/

const revealItems=document.querySelectorAll(

".login-card,.feature-card,.quote-card,.footer"

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

revealItems.forEach(item=>{

item.style.opacity="0";

item.style.transform="translateY(70px)";

item.style.transition=".8s ease";

observer.observe(item);

});

/*=========================================
        3D CARD TILT
=========================================*/

const cards=document.querySelectorAll(

".login-card,.feature-card,.quote-card"

);

cards.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

const rotateX=(y-rect.height/2)/18;

const rotateY=(rect.width/2-x)/18;

card.style.transform=

`perspective(1000px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
scale(1.03)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform=

"perspective(1000px) rotateX(0) rotateY(0) scale(1)";

});

});

/*=========================================
        CURSOR SPARKLES
=========================================*/

function createSparkle(x,y){

const sparkle=document.createElement("div");

sparkle.className="sparkle";

sparkle.style.left=x+"px";

sparkle.style.top=y+"px";

document.body.appendChild(sparkle);

setTimeout(()=>{

sparkle.remove();

},900);

}

document.addEventListener("mousemove",(e)=>{

if(Math.random()>0.88){

createSparkle(e.clientX,e.clientY);

}

});

/*=========================================
        LOGIN SUCCESS
=========================================*/

const loginForm=document.getElementById("loginForm");

if(loginForm){

loginForm.addEventListener("submit",(e)=>{

e.preventDefault();

const btn=document.querySelector(".login-btn");

btn.innerHTML=

'<i class="bi bi-check-circle-fill"></i> Login Successful';

btn.style.background=

"linear-gradient(135deg,#22C55E,#16A34A)";

setTimeout(()=>{

window.location.href="index.html";

},1500);

});

}   
