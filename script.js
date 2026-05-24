window.addEventListener("load",()=>{

const loader = document.querySelector(".loader");

setTimeout(()=>{

loader.classList.add("hide");

},1500);

});

const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove",(e)=>{

glow.style.left = e.clientX + "px";

glow.style.top = e.clientY + "px";

});

window.addEventListener("scroll",()=>{

const scrollTop =
document.documentElement.scrollTop;

const height =
document.documentElement.scrollHeight -
document.documentElement.clientHeight;

const scrolled =
(scrollTop / height) * 100;

document.querySelector(".progress-bar").style.width =
scrolled + "%";

});

const particles =
document.querySelector(".particles");

for(let i=0;i<100;i++){

const particle =
document.createElement("span");

particle.classList.add("particle");

particle.style.left =
Math.random()*100 + "%";

particle.style.animationDuration =
(Math.random()*10 + 5) + "s";

particle.style.width =
particle.style.height =
(Math.random()*5 + 2) + "px";

particles.appendChild(particle);

}

const accordions =
document.querySelectorAll(".accordion");

accordions.forEach(acc=>{

acc.addEventListener("click",()=>{

const panel =
acc.nextElementSibling;

const icon =
acc.querySelector("span");

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

AOS.init({

duration:1200,

once:false

});

VanillaTilt.init(

document.querySelectorAll(".tilt"),

{
max:15,
speed:400,
glare:true,
"max-glare":0.3
}

);

const themeBtn =
document.getElementById("themeToggle");

themeBtn.addEventListener("click",()=>{

document.body.classList.toggle("light");

if(document.body.classList.contains("light")){

themeBtn.innerHTML = "☀️";

}else{

themeBtn.innerHTML = "🌙";

}

});

const canvas =
document.getElementById("matrix");

const ctx =
canvas.getContext("2d");

canvas.width =
window.innerWidth;

canvas.height =
window.innerHeight;

const letters =
"01アイウエオカキクケコ";

const fontSize = 16;

const columns =
canvas.width / fontSize;

const drops = [];

for(let i=0;i<columns;i++){

drops[i]=1;

}

function drawMatrix(){

ctx.fillStyle =
"rgba(2,6,23,0.08)";

ctx.fillRect(
0,
0,
canvas.width,
canvas.height
);

ctx.fillStyle="#38bdf8";

ctx.font =
fontSize + "px monospace";

for(let i=0;i<drops.length;i++){

const text =
letters.charAt(
Math.floor(
Math.random()*letters.length
)
);

ctx.fillText(
text,
i*fontSize,
drops[i]*fontSize
);

if(
drops[i]*fontSize >
canvas.height &&
Math.random()>0.975
){

drops[i]=0;

}

drops[i]++;

}

}

setInterval(drawMatrix,35);