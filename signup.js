/*=========================================
        SIDEBAR MENU
=========================================*/

const menuBtn = document.getElementById("menuBtn");

const sidebar = document.getElementById("sidebar");

const closeBtn = document.getElementById("closeBtn");


if(menuBtn){

menuBtn.addEventListener("click",()=>{

sidebar.classList.add("active");

});

}


if(closeBtn){

closeBtn.addEventListener("click",()=>{

sidebar.classList.remove("active");

});

}


document.addEventListener("click",(e)=>{

if(sidebar && 
!sidebar.contains(e.target) &&
!menuBtn.contains(e.target)){

sidebar.classList.remove("active");

}

});


/*=========================================
        PASSWORD SHOW / HIDE
=========================================*/


const password=document.getElementById("password");

const confirmPassword=document.getElementById("confirmPassword");

const togglePassword=document.getElementById("togglePassword");

const toggleConfirm=document.getElementById("toggleConfirm");


if(togglePassword){

togglePassword.addEventListener("click",()=>{


if(password.type==="password"){

password.type="text";

togglePassword.innerHTML=
'<i class="bi bi-eye-slash-fill"></i>';

}

else{

password.type="password";

togglePassword.innerHTML=
'<i class="bi bi-eye-fill"></i>';

}


});

}



if(toggleConfirm){

toggleConfirm.addEventListener("click",()=>{


if(confirmPassword.type==="password"){

confirmPassword.type="text";

toggleConfirm.innerHTML=
'<i class="bi bi-eye-slash-fill"></i>';

}

else{

confirmPassword.type="password";

toggleConfirm.innerHTML=
'<i class="bi bi-eye-fill"></i>';

}


});

}



/*=========================================
        PASSWORD STRENGTH
=========================================*/


const strengthFill=document.getElementById("strengthFill");

const strengthText=document.getElementById("strengthText");


if(password){

password.addEventListener("input",()=>{


let value=password.value;

let strength=0;


if(value.length>=8){

strength+=25;

}

if(/[A-Z]/.test(value)){

strength+=25;

}

if(/[0-9]/.test(value)){

strength+=25;

}

if(/[!@#$%^&*]/.test(value)){

strength+=25;

}



strengthFill.style.width=strength+"%";



if(strength<=25){

strengthText.innerHTML="Weak Password";

}

else if(strength<=50){

strengthText.innerHTML="Medium Password";

}

else if(strength<=75){

strengthText.innerHTML="Strong Password";

}

else{

strengthText.innerHTML="Excellent Password 🔥";

}


});

}
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
        SAKURA PETALS
=========================================*/

const sakuraContainer=document.getElementById("sakura-container");


function createSakura(){

if(!sakuraContainer) return;


const petal=document.createElement("span");

petal.className="sakura";


petal.innerHTML="🌸";


petal.style.left=Math.random()*100+"vw";

petal.style.animationDuration=

(5+Math.random()*5)+"s";


petal.style.fontSize=

(15+Math.random()*20)+"px";


sakuraContainer.appendChild(petal);



setTimeout(()=>{

petal.remove();

},10000);


}


setInterval(createSakura,500);



/*=========================================
        EMERALD PARTICLES
=========================================*/


const particles=document.querySelector(".particles");


function createParticle(){

if(!particles) return;


const dot=document.createElement("span");


dot.className="green-particle";


dot.style.left=Math.random()*100+"vw";

dot.style.top=Math.random()*100+"vh";


dot.style.animationDuration=

(3+Math.random()*4)+"s";


particles.appendChild(dot);



setTimeout(()=>{

dot.remove();

},7000);


}


setInterval(createParticle,300);



/*=========================================
        CARD 3D TILT
=========================================*/


const signupCard=document.querySelector(".signup-card");


if(signupCard){


signupCard.addEventListener("mousemove",(e)=>{


const rect=signupCard.getBoundingClientRect();


const x=e.clientX-rect.left;

const y=e.clientY-rect.top;


const rotateX=(y-rect.height/2)/20;

const rotateY=(rect.width/2-x)/20;


signupCard.style.transform=

`perspective(1000px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
scale(1.02)`;


});



signupCard.addEventListener("mouseleave",()=>{


signupCard.style.transform=

"rotateX(0) rotateY(0) scale(1)";


});

/*=========================================
        SCROLL TO TOP
=========================================*/

const scrollBtn=document.getElementById("scrollTopBtn");


window.addEventListener("scroll",()=>{


if(window.scrollY>400){

scrollBtn.classList.add("show");

}

else{

scrollBtn.classList.remove("show");

}


});


if(scrollBtn){

scrollBtn.addEventListener("click",()=>{


window.scrollTo({

top:0,

behavior:"smooth"

});


});

}


/*=========================================
        PAGE FADE IN
=========================================*/


window.addEventListener("load",()=>{


document.body.style.opacity="1";


});


/*=========================================
        SIGNUP FORM VALIDATION
=========================================*/


const signupForm=document.getElementById("signupForm");


const loadingOverlay=document.getElementById("loadingOverlay");



if(signupForm){


signupForm.addEventListener("submit",(e)=>{


e.preventDefault();



const pass=password.value;

const confirm=confirmPassword.value;



if(pass!==confirm){


alert("Password does not match ❌");

return;


}



/* SHOW LOADING */


if(loadingOverlay){

loadingOverlay.classList.add("active");

}



setTimeout(()=>{


if(loadingOverlay){

loadingOverlay.classList.remove("active");

}



showSuccess();


},2500);



});


}



/*=========================================
        SUCCESS POPUP
=========================================*/


function showSuccess(){


const popup=document.createElement("div");


popup.className="success-popup";


popup.innerHTML=`

<div>

<i class="bi bi-check-circle-fill"></i>

<h2>Account Created!</h2>

<p>Welcome to PSV CareerAI 🚀</p>

</div>

`;



document.body.appendChild(popup);



setTimeout(()=>{


popup.remove();


window.location.href="login.html";


},2500);



}
}

