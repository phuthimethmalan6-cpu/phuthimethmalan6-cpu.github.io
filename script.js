let heartParticles = [];
const str = "I LOVE YOU ";
let angle = 0;

function setup() {
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent('canvas-container');
    textFont('Prompt');
    textSize(16);
    fill(0, 150, 255); // สีฟ้า
}

function draw() {
    background(2, 11, 26, 30); // พื้นหลังมืดแบบมีหางจางๆ
    translate(width / 2, height / 2);

    // สูตรวาดรูปหัวใจด้วยตัวอักษรวิ่ง
    let x = 16 * pow(sin(angle), 3);
    let y = -(13 * cos(angle) - 5 * cos(2 * angle) - 2 * cos(3 * angle) - cos(4 * angle));
    
    // ปรับขนาดความกว้างหัวใจ
    let scaleFactor = windowWidth < 500 ? 10 : 15;
    
    // เพิ่มตัวอักษรเข้าไปในอาร์เรย์
    heartParticles.push({
        x: x * scaleFactor,
        y: y * scaleFactor,
        text: str[frameCount % str.length],
        alpha: 255
    });

    // วาดตัวอักษรทั้งหมด
    for (let i = 0; i < heartParticles.length; i++) {
        let p = heartParticles[i];
        fill(0, 180, 255, p.alpha);
        text(p.text, p.x, p.y);
        p.alpha -= 2; // ค่อยๆ จางลง
        if (p.alpha < 0) heartParticles.splice(i, 1);
    }

    angle += 0.1;
}

// ระบบจัดการปุ่ม
const btnOpen = document.getElementById('btn-open');
const welcomeScreen = document.getElementById('welcome-screen');
const mainContent = document.getElementById('main-content');
const audio = document.getElementById('myAudio');

btnOpen.addEventListener('click', () => {
    audio.play().catch(e => console.log("Play failed"));
    welcomeScreen.style.opacity = '0';
    setTimeout(() => {
        welcomeScreen.style.display = 'none';
        mainContent.classList.add('show');
    }, 1000);
});

document.getElementById('btn-close').addEventListener('click', () => {
    if(confirm("แน่ใจหรอจะปิด?")) {
        document.body.innerHTML = "<h1 style='color:white; text-align:center; margin-top:40vh;'>Bye Bye 😊</h1>";
    }
});

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
