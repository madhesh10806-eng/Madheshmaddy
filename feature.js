/*=========================================
        PAGE LOADER
=========================================*/

window.addEventListener("load",()=>{

document.body.style.opacity="1";

});

/*=========================================
        SIDEBAR
=========================================*/

const menuBtn=document.getElementById("menuBtn");

const sidebar=document.getElementById("sidebar");

const closeMenu=document.getElementById("closeMenu");

menuBtn.onclick=()=>{

sidebar.classList.add("active");

}

closeMenu.onclick=()=>{

sidebar.classList.remove("active");

}

window.onclick=(e)=>{

if(e.target===sidebar){

sidebar.classList.remove("active");

}

}

/*=========================================
        TYPING EFFECT
=========================================*/

const words=[

"ZORO AI",

"Your Career Mentor",

"Resume Builder",

"Interview Coach",

"Future Assistant"

];

let wordIndex=0;

let charIndex=0;

let deleting=false;

const typing=document.getElementById("typing-text");

function typeEffect(){

const current=words[wordIndex];

if(!deleting){

typing.textContent=current.substring(0,charIndex++);

if(charIndex>current.length){

deleting=true;

setTimeout(typeEffect,1500);

return;

}

}

else{

typing.textContent=current.substring(0,charIndex--);

if(charIndex===0){

deleting=false;

wordIndex++;

if(wordIndex>=words.length){

wordIndex=0;

}

}

}

setTimeout(typeEffect,deleting?50:100);

}

typeEffect();

/*=========================================
        SCROLL TO TOP
=========================================*/

const scrollBtn=document.getElementById("scrollTopBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

scrollBtn.style.display="block";

}

else{

scrollBtn.style.display="none";

}

});

scrollBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

}
/*=========================================
        ZORO AI CHAT
=========================================*/

const chatBody=document.getElementById("chatBody");

const userInput=document.getElementById("userInput");

const sendBtn=document.getElementById("sendBtn");

const questionBtns=document.querySelectorAll(".question-btn");

/*=========================================
        AI RESPONSES
=========================================*/

const replies={

python:"Python is one of the best programming languages for AI, Data Science, Automation and Web Development.",

java:"Java is widely used for Android apps, enterprise software and backend development.",

javascript:"JavaScript powers interactive websites and modern web applications.",

html:"HTML is the foundation of every website.",

css:"CSS is used to design beautiful and responsive websites.",

resume:"I can help you create a professional ATS-friendly resume.",

interview:"Practice HR questions, technical questions and coding problems every day.",

cloud:"Learn AWS, Azure, Docker, Kubernetes and Linux to become a Cloud Engineer.",

cyber:"Start with Networking, Linux and Ethical Hacking before learning advanced security.",

ai:"Artificial Intelligence enables computers to learn, reason and solve problems like humans.",

datascience:"Learn Python, Pandas, NumPy, SQL and Machine Learning for Data Science.",

software:"Master HTML, CSS, JavaScript, Python or Java and build real-world projects.",

default:"I'm still learning. Try asking about Python, Java, AI, Cloud Computing, Resume, Interview or Cyber Security."

};

/*=========================================
        SEND MESSAGE
=========================================*/

function sendMessage(message){

if(message.trim()==="") return;

chatBody.innerHTML+=`

<div class="ai-message" style="justify-content:flex-end">

<div class="message-box">

${message}

</div>

</div>

`;

chatBody.scrollTop=chatBody.scrollHeight;

reply(message);

userInput.value="";

}

/*=========================================
        AI REPLY
=========================================*/

function reply(text){

let answer=replies.default;

const lower=text.toLowerCase();

for(let key in replies){

if(lower.includes(key)){

answer=replies[key];

break;

}

}

setTimeout(()=>{

chatBody.innerHTML+=`

<div class="ai-message">

<div class="message-icon">

<i class="bi bi-robot"></i>

</div>

<div class="message-box">

${answer}

</div>

</div>

`;

chatBody.scrollTop=chatBody.scrollHeight;

saveChat();

},900);

}

/*=========================================
        EVENTS
=========================================*/

sendBtn.onclick=()=>{

sendMessage(userInput.value);

};

userInput.addEventListener("keypress",(e)=>{

if(e.key==="Enter"){

sendMessage(userInput.value);

}

});

questionBtns.forEach(btn=>{

btn.onclick=()=>{

sendMessage(btn.innerText);

};

});

/*=========================================
        LOCAL STORAGE
=========================================*/

function saveChat(){

localStorage.setItem(

"zoroChat",

chatBody.innerHTML

);

}

window.addEventListener("load",()=>{

const saved=localStorage.getItem("zoroChat");

if(saved){

chatBody.innerHTML=saved;

}

});
/*=========================================
        DARK / LIGHT MODE
=========================================*/

const themeToggle=document.getElementById("themeToggle");

let darkMode=true;

themeToggle.addEventListener("click",(e)=>{

e.preventDefault();

document.body.classList.toggle("light-mode");

darkMode=!darkMode;

themeToggle.innerHTML=darkMode

?'<i class="bi bi-moon-stars-fill"></i> Dark Mode'

:'<i class="bi bi-sun-fill"></i> Light Mode';

});

/*=========================================
        COUNTER ANIMATION
=========================================*/

const counters=document.querySelectorAll(".counter");

const startCounter=()=>{

counters.forEach(counter=>{

const target=+counter.dataset.target;

let count=0;

const speed=target/120;

const update=()=>{

count+=speed;

if(count<target){

counter.innerText=Math.floor(count);

requestAnimationFrame(update);

}else{

counter.innerText=target;

}

};

update();

});

};

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

startCounter();

observer.disconnect();

}

});

});

const statsSection=document.querySelector(".stats-section");

if(statsSection){

observer.observe(statsSection);

}

/*=========================================
        SCROLL REVEAL
=========================================*/

const revealElements=document.querySelectorAll(

".chat-card,.feature-card,.resume-form-card,.resume-preview,.template-card,.skill-card,.interview-card,.dashboard-card,.roadmap-card,.testimonial-card,.stats-card,.cta-card"

);

const revealObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

},{threshold:.2});

revealElements.forEach(el=>{

el.style.opacity="0";

el.style.transform="translateY(60px)";

el.style.transition=".8s";

revealObserver.observe(el);

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
        VOICE INPUT
=========================================*/

const voiceBtn=document.querySelector(".voice-btn");

if("webkitSpeechRecognition" in window){

const recognition=new webkitSpeechRecognition();

recognition.lang="en-US";

recognition.continuous=false;

recognition.interimResults=false;

voiceBtn.onclick=()=>{

recognition.start();

};

recognition.onresult=(event)=>{

userInput.value=event.results[0][0].transcript;

sendMessage(userInput.value);

};

}

/*=========================================
        AI VOICE OUTPUT
=========================================*/

function speak(text){

if("speechSynthesis" in window){

const speech=new SpeechSynthesisUtterance(text);

speech.lang="en-US";

speech.rate=1;

speech.pitch=1;

window.speechSynthesis.speak(speech);

}

}

const oldReply=reply;

reply=function(text){

let answer=replies.default;

const lower=text.toLowerCase();

for(let key in replies){

if(lower.includes(key)){

answer=replies[key];

break;

}

}

setTimeout(()=>{

chatBody.innerHTML+=`

<div class="ai-message">

<div class="message-icon">

<i class="bi bi-robot"></i>

</div>

<div class="message-box">

${answer}

</div>

</div>

`;

chatBody.scrollTop=chatBody.scrollHeight;

saveChat();

speak(answer);

},900);

};
