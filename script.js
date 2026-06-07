const WEBHOOK_URL =
"https://discord.com/api/webhooks/1513221958177919076/TS30CCw4esrYSLJ41vdehXjAlSiSezJSVagxHQdIUPz3Jp0g2F4wJFeHO0BrAwv2rOxx";

/* หัวใจลอย */

for(let i=0;i<50;i++){

const heart =
document.createElement("div");

heart.className = "heart";

heart.innerHTML =
Math.random() > .5
? "💖"
: "🌸";

heart.style.left =
Math.random()*100+"%";

heart.style.animationDuration =
(5+Math.random()*8)+"s";

heart.style.opacity =
Math.random();

document
.getElementById("hearts")
.appendChild(heart);

}

/* เปิดซอง */

const envelope =
document.getElementById("envelope");

const card =
document.getElementById("card");

envelope.onclick = ()=>{

envelope.classList.add("open");

setTimeout(()=>{

envelope.style.display="none";
card.style.display="block";

typeText();

},700);

};

function typeText(){

const title =
"ขอกลับไปจีบน้องใหม่ได้มั้ย";

const msg =
"พี่อยากกลับไปอีกครั้ง และอยากเริ่มต้นใหม่อีกครั้ง ❤️";

let i = 0;
let j = 0;

const titleEl =
document.getElementById("title");

const msgEl =
document.getElementById("message");

const t1 = setInterval(()=>{

titleEl.textContent += title[i];
i++;

if(i >= title.length){

clearInterval(t1);

const t2 =
setInterval(()=>{

msgEl.textContent += msg[j];
j++;

if(j >= msg.length){
clearInterval(t2);
}

},40);

}

},60);

}

async function sendAnswer(answer){

const name =
document.getElementById("name").value
|| "ไม่ระบุชื่อ";

try{

await fetch(
WEBHOOK_URL,
{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({

username:"💌 Love Letter",

embeds:[{
title:"🌸 มีคนตอบจดหมายแล้ว",
description:"ผลตอบกลับจากเว็บไซต์",
color:16738740,

fields:[
{
name:"👤 ชื่อ",
value:name,
inline:true
},
{
name:"💖 คำตอบ",
value:answer,
inline:true
}
],

footer:{
text:"Love Letter Website"
},

timestamp:new Date()
}]
})
}
);

card.innerHTML =
answer==="YES"
?
"<h1>💖 ขอบคุณที่ให้โอกาสอีกครั้ง 💖</h1>"
:
"<h1>🌸 ขอบคุณที่ตอบกลับนะ 🌸</h1>";

}catch(e){

alert("Webhook ไม่ทำงาน");

}

}