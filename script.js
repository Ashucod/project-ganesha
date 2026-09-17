const bellBtn = document.getElementById('temple-bell');
const startAartiBtn = document.getElementById('start-aarti-btn');
const thaliContainer = document.getElementById('cursor-thali-container');
const body = document.body;

const bellSound = new Audio('assets/audio/bell.mp3');
const aartiMusic = new Audio('assets/audio/aarti.mp3');
aartiMusic.loop = true;

let isAartiActive = false;

bellBtn.addEventListener('click', () => {
    bellSound.currentTime = 0; 
    bellSound.play();
    bellBtn.classList.add('swing');
    setTimeout(() => {
        bellBtn.classList.remove('swing');
    }, 200); 
});

startAartiBtn.addEventListener('click', () => {
    isAartiActive = !isAartiActive; 

    if (isAartiActive) {
        startAartiBtn.innerText = "Stop Aarti";
        thaliContainer.classList.remove('hidden');
        body.classList.add('aarti-ambient-mode'); 
        aartiMusic.play();
    } else {
        startAartiBtn.innerText = "Start Aarti";
        thaliContainer.classList.add('hidden');    
        body.classList.remove('aarti-ambient-mode'); 
        aartiMusic.pause();
        aartiMusic.currentTime = 0; 
    }
});


document.addEventListener('mousemove', (e) => {
    if (!isAartiActive) return;
    thaliContainer.style.left = e.clientX + 'px';
    thaliContainer.style.top = e.clientY + 'px';
});