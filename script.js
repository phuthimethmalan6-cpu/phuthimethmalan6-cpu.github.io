/* ใส่ Webhook ใหม่ของนาย */
const WEBHOOK_URL =
"https://discord.com/api/webhooks/1513215007314411650/IG90uM0kAYPuVoNWsQ4lhaPEAR3TIU1ECl1j_g0pmBWO9p-TyUHDvZ59lWnsqV88dSz8";

/* กุหลาบลอย */

for(let i=0;i<25;i++){

const petal =
document.createElement("div");

petal.className = "petal";

petal.innerHTML = "🌹";

petal.style.left =
Math.random()*100 + "%";

petal.style.animationDuration =
(5+Math.random()*8)+"s";

petal.style.opacity =
Math.random();

document
.getElementById("petals")
.appendChild(petal);

}

async function sendAnswer(answer){

const name =
document.getElementById("name")
.value || "ไม่ระบุชื่อ";

try{

await fetch(WEBHOOK_URL,{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({

username:"🌹 Love Letter",

embeds:[{

title:
"มีคนตอบจดหมายแล้ว",

description:
"ผลตอบกลับจากเว็บไซต์",

color:16724787,

fields:[
{
name:"👤 ชื่อ",
value:name,
inline:true
},
{
name:"❤️ คำตอบ",
value:answer,
inline:true
},
{
name:"📱 อุปกรณ์",
value:navigator.userAgent,
inline:false
}
],

footer:{
text:"Love Letter"
},

timestamp:
new Date().toISOString()

}]
})
});

document.querySelector(".card")
.innerHTML =
answer === "YES"
?
"<h1>❤️ ขอบคุณที่ให้โอกาสอีกครั้ง ❤️</h1>"
:
"<h1>🌹 ขอบคุณที่ตอบกลับนะ 🌹</h1>";

}catch(err){

alert(
"Webhook ไม่ทำงาน หรือ URL ไม่ถูกต้อง"
);

}

}