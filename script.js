let particles = [];
let targetParticles = [];
let isStarted = false;
const numParticles = 450; 

function setup() {
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent('main-content');
    
    for (let i = 0; i < numParticles; i++) {
        let angle = map(i, 0, numParticles, 0, TWO_PI);
        let scaleFactor = min(width, height) / 35; 
        let tx = 16 * pow(sin(angle), 3);
        let ty = -(13 * cos(angle) - 5 * cos(2 * angle) - 2 * cos(3 * angle) - cos(4 * angle));
        targetParticles.push(createVector(tx * scaleFactor, ty * scaleFactor));
    }

    for (let i = 0; i < numParticles; i++) {
        particles.push(new Particle());
    }
}

function draw() {
    if (!isStarted) return;
    background(0, 0, 0, 50); 
    translate(width / 2, height / 2);

    for (let i = 0; i < particles.length; i++) {
        particles[i].arrive(targetParticles[i]);
        particles[i].jitter();
        particles[i].update();
        particles[i].display();
    }
}

class Particle {
    constructor() {
        this.pos = createVector(random(-width/2, width/2), random(-height/2, height/2));
        this.vel = createVector(random(-2, 2), random(-2, 2));
        this.acc = createVector(0, 0);
        this.maxSpeed = 6;
        this.maxForce = 0.25;
        this.size = random(1, 3);
    }

    arrive(target) {
        let desired = p5.Vector.sub(target, this.pos);
        let d = desired.mag();
        if (d < 100) {
            let m = map(d, 0, 100, 0, this.maxSpeed);
            desired.setMag(m);
        } else {
            desired.setMag(this.maxSpeed);
        }
        let steer = p5.Vector.sub(desired, this.vel);
        steer.limit(this.maxForce);
        this.applyForce(steer);
    }

    applyForce(force) { this.acc.add(force); }

    update() {
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.mult(0);
    }

    jitter() {
        this.pos.add(random(-0.7, 0.7), random(-0.7, 0.7));
    }

    display() {
        noStroke();
        // เปลี่ยนสีเป็นสีแดง Glow แบบในรูป
        fill(255, 20, 20, 180); 
        ellipse(this.pos.x, this.pos.y, this.size, this.size);
        fill(255, 0, 0, 40); 
        ellipse(this.pos.x, this.pos.y, this.size * 3, this.size * 3);
    }
}

const btnOpen = document.getElementById('btn-open');
const welcomeScreen = document.getElementById('welcome-screen');
const mainContent = document.getElementById('main-content');
const audio = document.getElementById('myAudio');

btnOpen.addEventListener('click', () => {
    audio.play().catch(e => console.log("Audio play blocked"));
    welcomeScreen.style.opacity = '0';
    setTimeout(() => {
        welcomeScreen.style.display = 'none';
        mainContent.classList.remove('hidden');
        mainContent.classList.add('show');
        isStarted = true;
    }, 1000);
});

document.getElementById('btn-close').addEventListener('click', () => {
    if(confirm("แน่ใจหรอจะปิด? 😊")) {
        document.body.innerHTML = "<h1 style='color:red; text-align:center; margin-top:45vh; font-family:Prompt;'>ไว้พบกันใหม่นะ</h1>";
    }
});

function windowResized() { resizeCanvas(windowWidth, windowHeight); }
