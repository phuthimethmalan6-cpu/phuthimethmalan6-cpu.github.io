ไฟล์ script.js

const envelope = document.getElementById("envelope");
const letter = document.getElementById("letter");
const music = document.getElementById("music");

/*
ใส่ Webhook ใหม่ของนายตรงนี้
*/
const WEBHOOK_URL = "https://discord.com/api/webhooks/1513215007314411650/IG90uM0kAYPuVoNWsQ4lhaPEAR3TIU1ECl1j_g0pmBWO9p-TyUHDvZ59lWnsqV88dSz8";

envelope.addEventListener("click", () => {

    envelope.style.display = "none";
    letter.style.display = "block";

    music.play().catch(() => {});

});

function getDevice(){

    const ua = navigator.userAgent;

    if(ua.includes("Android")) return "Android";
    if(ua.includes("iPhone")) return "iPhone";
    if(ua.includes("Windows")) return "Windows";
    if(ua.includes("Mac")) return "Mac";

    return "Unknown";

}

async function sendAnswer(answer){

    const name =
    document.getElementById("name").value || "ไม่ระบุชื่อ";

    try{

        await fetch(WEBHOOK_URL,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({

                username:"💌 Letter Bot",

                embeds:[{
                    title:"มีคนตอบจดหมายแล้ว",
                    description:"ผลตอบกลับจากเว็บไซต์",
                    color:16777215,

                    fields:[
                        {
                            name:"👤 ชื่อ",
                            value:name,
                            inline:true
                        },
                        {
                            name:"📱 อุปกรณ์",
                            value:getDevice(),
                            inline:true
                        },
                        {
                            name:"❤️ คำตอบ",
                            value:answer,
                            inline:false
                        }
                    ],

                    footer:{
                        text:"Letter Website"
                    },

                    timestamp:new Date()
                }]
            })
        });

        document.querySelector(".card").innerHTML =
        answer === "YES"
        ? "<h1>❤️ ขอบคุณที่ให้โอกาสอีกครั้ง ❤️</h1>"
        : "<h1>🖤 ขอบคุณที่ตอบกลับนะ 🖤</h1>";

    }catch(err){

        alert("ส่งข้อมูลไม่สำเร็จ");

    }

}