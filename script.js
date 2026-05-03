const btnOpen = document.getElementById('btn-open');
const btnClose = document.getElementById('btn-close');
const welcomeScreen = document.getElementById('welcome-screen');
const mainContent = document.getElementById('main-content');
const audio = document.getElementById('myAudio');

btnOpen.addEventListener('click', () => {
    audio.play().catch(e => console.log("Audio Error"));
    welcomeScreen.style.opacity = '0';
    setTimeout(() => {
        welcomeScreen.classList.add('hidden');
        mainContent.classList.remove('hidden');
        setTimeout(() => { mainContent.classList.add('show'); }, 100);
    }, 1200);
});

btnClose.addEventListener('click', () => {
    if (confirm("คุณแน่ใจหรอที่จะทิ้งดอกไม้นี้ไป? 😊")) {
        document.body.innerHTML = `<div style="height:100vh; display:flex; justify-content:center; align-items:center; background:#020b1a; color:white; font-family:'Prompt';"><h1>ไว้พบกันใหม่นะ... 😊</h1></div>`;
    }
});
