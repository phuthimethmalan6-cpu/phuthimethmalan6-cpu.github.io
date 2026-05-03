const btnOpen = document.getElementById('btn-open');
const btnClose = document.getElementById('btn-close');
const welcomeScreen = document.getElementById('welcome-screen');
const mainContent = document.getElementById('main-content');
const audio = document.getElementById('myAudio');

// เมื่อกดปุ่ม Open
btnOpen.addEventListener('click', () => {
    // 1. เล่นเพลง
    audio.play().catch(e => console.log("Audio play failed: ", e));
    
    // 2. เอฟเฟกต์จางออก
    welcomeScreen.style.opacity = '0';
    welcomeScreen.style.transform = 'scale(1.1)';
    
    setTimeout(() => {
        welcomeScreen.classList.add('hidden');
        
        // 3. แสดงหน้าหลัก
        mainContent.classList.remove('hidden');
        // ใช้ setTimeout เล็กน้อยเพื่อให้ transition ทำงาน
        setTimeout(() => {
            mainContent.classList.add('show');
        }, 100);
    }, 1200);
});

// เมื่อกดปุ่ม Close
btnClose.addEventListener('click', () => {
    const confirmChoice = confirm("คุณแน่ใจหรอที่จะปิดโอกาสนี้ไป? 😊");
    if (confirmChoice) {
        document.body.innerHTML = `
            <div style="height:100vh; display:flex; flex-direction:column; justify-content:center; align-items:center; background:#020b1a; color:white; font-family:'Prompt';">
                <h1>ขอบคุณที่แวะมานะ...</h1>
                <p style="margin-top:20px; opacity:0.6;">(คุณสามารถปิดหน้าต่างนี้ได้เลย)</p>
            </div>
        `;
        setTimeout(() => {
            window.close();
        }, 2000);
    }
});
