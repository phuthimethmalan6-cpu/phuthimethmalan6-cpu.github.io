// LOADER

window.addEventListener("load",()=>{

const loader = document.querySelector(".loader");

setTimeout(()=>{

loader.classList.add("hide");

},1500);

});

// REVEAL

const cards = document.querySelectorAll(".card");

function reveal(){

cards.forEach(card=>{

const top = card.getBoundingClientRect().top;

if(top < window.innerHeight - 100){

card.classList.add("show");

}

});

}

window.addEventListener("scroll",reveal);

reveal();

// CURSOR

const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove",(e)=>{

glow.style.left = e.clientX + "px";
glow.style.top = e.clientY + "px";

});

// PROGRESS

window.addEventListener("scroll",()=>{

const scrollTop = document.documentElement.scrollTop;

const height =
document.documentElement.scrollHeight -
document.documentElement.clientHeight;

const scrolled = (scrollTop / height) * 100;

document.querySelector(".progress-bar").style.width =
scrolled + "%";

});

// PARTICLES

const particles = document.querySelector(".particles");

for(let i=0;i<100;i++){

const particle = document.createElement("span");

particle.classList.add("particle");

particle.style.left = Math.random()*100 + "%";

particle.style.animationDuration =
(Math.random()*10 + 5) + "s";

particle.style.opacity = Math.random();

particle.style.width =
particle.style.height =
(Math.random()*5 + 2) + "px";

particles.appendChild(particle);

}