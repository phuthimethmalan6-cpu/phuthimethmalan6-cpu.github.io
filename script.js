// LOADER

window.addEventListener("load",()=>{

const loader = document.querySelector(".loader");

setTimeout(()=>{

loader.classList.add("hide");

},1500);

});

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

// ACCORDION

const accordions =
document.querySelectorAll(".accordion");

accordions.forEach(acc => {

acc.addEventListener("click",()=>{

const panel = acc.nextElementSibling;

const icon = acc.querySelector("span");

if(panel.style.maxHeight){

panel.style.maxHeight = null;

icon.innerHTML = "+";

}else{

panel.style.maxHeight =
panel.scrollHeight + "px";

icon.innerHTML = "−";

}

});

});