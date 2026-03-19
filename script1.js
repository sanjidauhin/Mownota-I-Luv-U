// ===== Configuration =====
const pleasingMessages = [
    "তোমার আইটেমের আগে কল দিয়ে জ্বালাবো না! 🌟",
    "তুমি যা বলবে তাই করবো! 🙏",
    "তোমার জন্য কবিতা লিখবো... 😢",
    "শেষবারের মত মাফ করে দেও? 🌹",
    "তোমাকে বিয়ে করে সম্রাজ্ঞীর মত রাখবো! 😄",
    "তোমার জন্য রান্না করবো! 💑",
    "আমার মত আর ভালোবাসবে কে তোমায়? 💔",
    "Say yes, say yes, say yes! 🎉",
    "তোমাকে নিজ হাতে খাইয়ে দিব! 💆‍♀️",
    "তোমাকে খ্যাপসা খাওয়াবো! 🍽️",
    "তোমার সাথে মুভি দেখব! 🎬",
    "প্রতি ডেটে তোমার জন্য চকলেট আনবো! 🍫",
    "সারাজীবন তোমার থাকবো! ☀️",
    "তোমাকে ভালোবাসি প্রচন্ড 💓",
    "বিসিএস প্রেপ কিন্তু তোমার জন্যই নিচ্ছি! 🌎",
    "তোমার জন্য When Life Gives You Tangerines দেখসি! 🍀",
    "Remember Your First kiss! 🙈",
    "না বললে কিন্তু তোমাকে মারবো! 🔥",
    "তোমার জন্য স্পাইডারম্যানের প্রোফাইল পিক চেঞ্জ করসি! 🕷️",
    "তোমার ভুড়ি নিয়ে মজা করবো না (maybe)! 🤪",
    "তোমাকে চা বানাই খাওয়াবো! 🥪",
    "তোমাকে স্কিনকেয়ার কিনে দিব! 🧩",
    "তোমাকে গল্পের বই পড়ে শুনাবো! ",
    "Genie Make a Wish দেখবো! 🦞",
    "তোমাকে গোলাপ কিনে দিব! 💐",
    "তোমার মাথা ম্যাসাজ করে দিব! 👵👴",
    "তোমাকে বিয়ের পর পার্সোনাল ওয়াশরুম আর বারান্দা দিব! ✨",
    "তোমাকে BTS এর কনসার্টের টিকিট গিফট করবো! ",
    "বিয়ের পর তোমাকে রান্না করার জন্য ফোর্স করবো না! 🌗",
    "আমার ST এর স্যালারির পুরোটাই তো তোমার! ",
    "I'll carry your bags! 🛍️",
    "তোমাকে কত সহস্রবার স্বপ্নে দেখসি জানো? 🌠",
    "তোমাকে ১কোটি টাকা দেনমোহর দিব! 🤝",
    "তোমার জন্য আমি প্রতিদিন হাটতে যাই! 😇",
    "তোমাকে ভডু বলবো না! 🤪",
    "চল একসাথে সুন্দর স্মৃতি বানাই! 📸",
    "You're my everything! 🌍",
    "তোমাকে সারাজীবন আগলে রাখব! 🔒",
    "নেভি চুদি! 🤞",
    "শেষবারের মত মাফ করে দেও! 😭",
    "তোমার সাথে একসাথে বৃষ্টিতে ভেজা! 📜",
    "তোমার সাথে সিনেমা দেখা! ",
    "তোমার সাথে ফুচকা খাওয়া! ☝️",
    "তোমার হাতের কফি খাওয়া (Davidoff)! 🔮",
    "তোমার রাগ আর কে সহ্য করতে পারবে? 📣",
    "সবজায়গায় ব্লক দেবার পর কেউ তোমাকে মেইলে সরু বলবে? 😭",
    "তোমার টোল পড়া হাসি বড্ড ভালোবাসি! 🎟️",
    "তোমার টোল পড়া গালে সস রেখে ফ্রেঞ্চ ফ্রাই খাবো! 😜",
    "তোমার চোখ খুব সুন্দর! 😍",
    "তোমার হাসি খুব সুন্দর? ",
    "আমাকে ছাড়লে বাঙ্গু মুমিনই পাবা! ➡️",
    "তুমি সুন্দরী তাই তোমার দিকে চেয়ে থাকি এটাই কি আমার দোষ? ⚠️",
    "Weight loss করব! 🥺",
    "Six Pack is on the way!",
    "তোমাকে বার বার কল দিয়ে জ্বালাবো না! ⏳"
    "Please? 🥺",
    "Don't say no!!!!",
    "Pleaseeeeeeeeeeeee 💕",
    "তোমার মাথা টিপে দিব! 🍝",
    "রাত্রি please? 🎀",
    "মৌনতা, আমি তো শুধু তোমারই! 😊",
    "ঢাকার রাস্তায় হাটু গেড়ে প্রোপোজ আর কে করবে তোমাকে? 🌟",
];

let noClickCount = 0;
let yesButtonScale = 1;
let noButtonScale = 1;
let currentSlide = 0;

// ===== Sound Effects =====
const clickSound = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBSuBzvLZiTYIGmi787eORgsUXrTo66hVFApGnt/yvmwhBSuAzvLZiTYIGmi787eORgsUXrTo66hVFApGnt/yvmwhBSt/zvHYiTYHGmi787eNRgsVXrPo66hWFApGnt/yvmwhBSt/zvHYiTYHGmi787eNRgsVXrPo66hWFApGnt/yvmwhBSt/zvHYiDYHGmi787eNRgsVXrPo66hWFApGnt/yvmwhBSt/zvHYiDUHGmi787eNRgsVXrPo66hWFApGnt/zvWwhBSt/zvHYiDUHGmi787eNRgsVXrPo66hWFApGnt/zvWwhBSt/zvHYiDUHGmi787eNRgsVXrPo66hWFApGnt/zvWwhBSt/zvHYiDUHGmi787eNRgsVXrPo66hWFApGnt/zvWwhBSt/zvHYiDUHGmi787eNRgsVXrPo66hWFApGnt/zvWwhBSt/zvHYiDUHGmi787eNRgsVXrPo66hWFApGnt/zvWwhBSt/zvHYiDUHGmi787eNRgsVXrPo66hWFApGnt/zvWwhBSt/zvHYiDUHGmi787eNRgsVXrPo66hWFApGnt/zvWwhBSt/zvHYiDUHGmi787eNRgsVXrPo66hWFApGnt/zvWwhBSt/zvHYiDUHGmi787eNRgsVXrPo66hWFApGnt/zvWwhBSt/zvHYiDUHGmi787eNRgsVXrPo66hWFApGn');

// ===== DOM Elements =====
const loadingScreen = document.getElementById('loadingScreen');
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const buttonContainer = document.getElementById('buttonContainer');
const attemptCounter = document.getElementById('attemptCounter');
const attemptText = document.getElementById('attemptText');
const successModal = document.getElementById('successModal');
const successMessage = document.getElementById('successMessage');
// Close button removed
const musicToggle = document.getElementById('musicToggle');
const mainMusic = document.getElementById('mainMusic');
const musicFinale = document.getElementById('musicFinale');

let currentTrack = mainMusic;
let isMuted = false;
let isMusicPlaying = false;
const prevSlideBtn = document.getElementById('prevSlide');
const nextSlideBtn = document.getElementById('nextSlide');
const slideDots = document.getElementById('slideDots');

// ===== Loading Screen & Entrance Logic =====
const entranceScreen = document.getElementById('entranceScreen');
const enterBtn = document.getElementById('enterBtn');

// Initially ensure loading screen is hidden until entrance is clicked
loadingScreen.classList.add('hidden');

enterBtn.addEventListener('click', () => {
    // 1. Start Music (User interaction!)
    startMusic();

    // 2. Hide Entrance
    entranceScreen.classList.add('hidden');

    // 3. Show Loading Screen
    loadingScreen.classList.remove('hidden');

    // 4. Wait 7 seconds then show content
    setTimeout(() => {
        loadingScreen.classList.add('hidden');
    }, 7000);
});

// window.addEventListener('load') removed - we wait for user click now

// ... (Particle code remains same)
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particles = ['❤️', '💕', '💖', '💗', '💓', '💝', '💞'];

    setInterval(() => {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.textContent = particles[Math.floor(Math.random() * particles.length)];
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDuration = (Math.random() * 5 + 5) + 's';
        particle.style.fontSize = (Math.random() * 1.5 + 1) + 'rem';

        particlesContainer.appendChild(particle);

        setTimeout(() => {
            particle.remove();
        }, 10000);
    }, 500);
}

createParticles();

// ===== Cursor Trail Effect =====
const canvas = document.getElementById('cursorCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let cursorTrail = [];

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

document.addEventListener('mousemove', (e) => {
    cursorTrail.push({
        x: e.clientX,
        y: e.clientY,
        size: Math.random() * 15 + 5,
        life: 1
    });
});

function animateCursorTrail() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    cursorTrail = cursorTrail.filter(particle => particle.life > 0);

    cursorTrail.forEach(particle => {
        ctx.fillStyle = `rgba(255, 105, 180, ${particle.life})`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();

        particle.life -= 0.02;
        particle.size *= 0.95;
    });

    requestAnimationFrame(animateCursorTrail);
}

animateCursorTrail();

// ===== Music System =====

// Start music immediately on document interaction
function startMusic() {
    if (isMusicPlaying) return;

    // Always start from beginning
    mainMusic.currentTime = 0;
    mainMusic.volume = 0.5;

    mainMusic.play()
        .then(() => {
            isMusicPlaying = true;
            musicToggle.classList.remove('muted');
            console.log('Music started!');
            removeAutoplayListeners();
        })
        .catch(e => {
            console.log('Autoplay blocked');
        });
}

function removeAutoplayListeners() {
    document.removeEventListener('click', startMusic);
    document.removeEventListener('touchstart', startMusic);
    document.removeEventListener('keydown', startMusic);
    document.removeEventListener('mousemove', startMusic);
    document.removeEventListener('scroll', startMusic);
}

// Try on ANY interaction
document.addEventListener('click', startMusic);
document.addEventListener('touchstart', startMusic);
document.addEventListener('keydown', startMusic);
document.addEventListener('mousemove', startMusic);
document.addEventListener('scroll', startMusic);

// Also try on load
window.addEventListener('load', startMusic);


// Function to switch to finale
function switchToFinale() {
    if (currentTrack === musicFinale) return;

    // Stop main music
    mainMusic.pause();
    mainMusic.currentTime = 0;

    // Start finale
    musicFinale.currentTime = 0;
    musicFinale.volume = 0.5;

    if (!isMuted) {
        musicFinale.play().catch(e => console.log('Finale blocked:', e));
    }

    currentTrack = musicFinale;
}

// Mute/Unmute toggle
musicToggle.addEventListener('click', (e) => {
    e.stopPropagation(); // Don't trigger document click

    if (isMusicPlaying && !isMuted) {
        // Mute
        mainMusic.pause();
        musicFinale.pause();
        musicToggle.classList.add('muted');
        isMuted = true;
    } else {
        // Unmute
        if (currentTrack === musicFinale) {
            musicFinale.play().catch(e => { });
        } else {
            mainMusic.play().catch(e => { });
        }
        musicToggle.classList.remove('muted');
        isMuted = false;
        isMusicPlaying = true;
    }
});

// ===== No Button Logic =====
noBtn.addEventListener('click', (e) => {
    // IMPORTANT: Stop propagation to prevent document click from interfering
    e.stopPropagation();

    // CRITICAL FIX: Move button to body to escape the card's transform context
    if (noBtn.parentNode !== document.body) {
        document.body.appendChild(noBtn);
    }

    noClickCount++;

    // Play click sound
    try {
        clickSound.currentTime = 0;
        clickSound.play().catch(e => { });
    } catch (e) { }

    // Update text
    updateAttemptCounter();
    const randomMessage = pleasingMessages[Math.floor(Math.random() * pleasingMessages.length)];
    noBtn.textContent = randomMessage;

    // Move button (now relative to body)
    moveNoButton();

    // Shake animation
    const card = document.querySelector('.card');
    card.style.animation = 'none';
    void card.offsetWidth; // Trigger reflow
    card.style.animation = 'shake 0.5s';
});

function updateAttemptCounter() {
    let message = '';

    if (noClickCount === 1) {
        message = "Really? You're saying no, মৌনতা? 🥺";
    } else if (noClickCount === 3) {
        message = `মৌনতামণি, You've said no ${noClickCount} times... Yes ক্লিক করো ! 😢`;
    } else if (noClickCount === 5) {
        message = `${noClickCount} rejections?! আমি কিন্তু আত্মহত্যা করবো, রাত্রি! 💔`;
    } else if (noClickCount === 10) {
        message = `${noClickCount} TIMES?! আর একবার না ক্লিক করলে থাবড়াবো কিন্তু, মোডা, ভডু? 😭`;
    } else if (noClickCount > 10) {
        message = `${noClickCount} times and counting... I'm not giving up, রাত্রিমণি! ❤️`;
    }

    if (message && noClickCount > 0) {
        attemptText.textContent = message;
    }
}

function moveNoButton() {
    // Force layout update to get accurate dimensions with new text
    void noBtn.offsetWidth;

    // Get exact button dimensions
    const width = noBtn.offsetWidth;
    const height = noBtn.offsetHeight;

    // Get viewport dimensions (use clientWidth to exclude scrollbars)
    const vw = document.documentElement.clientWidth;
    const vh = document.documentElement.clientHeight;

    // HUGE Safety buffer
    const buffer = 50;

    // Calculate strict max positions
    // The button's top-left corner cannot be greater than (screen width - button width - buffer)
    // And cannot be less than (buffer)
    const maxLeft = Math.max(buffer, vw - width - buffer);
    const maxTop = Math.max(buffer, vh - height - buffer);

    // Generate random position within these STRICT bounds
    const randomX = Math.random() * (maxLeft - buffer) + buffer;
    const randomY = Math.random() * (maxTop - buffer) + buffer;

    // Verify one last time (clamping)
    const finalX = Math.min(Math.max(buffer, randomX), maxLeft);
    const finalY = Math.min(Math.max(buffer, randomY), maxTop);

    noBtn.style.position = 'fixed'; // Works correctly now that it's in body
    noBtn.style.left = `${finalX}px`;
    noBtn.style.top = `${finalY}px`;

    // Ensure high z-index
    noBtn.style.zIndex = '10000';

    // Speed up
    noBtn.style.transition = `all ${Math.max(0.1, 0.5 - noClickCount * 0.05)}s ease`;
}

// Add shake animation
const style = document.createElement('style');
style.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-10px); }
        75% { transform: translateX(10px); }
    }
`;
document.head.appendChild(style);

// ===== Yes Button Logic =====
yesBtn.addEventListener('click', (e) => {
    e.stopPropagation();

    // Play click sound
    try {
        clickSound.currentTime = 0;
        clickSound.play().catch(e => { });
    } catch (e) { }

    // Switch music
    switchToFinale();

    // Trigger confetti
    triggerConfetti();

    // HIDE NO BUTTON (FIX: Since it might be in body now)
    noBtn.style.display = 'none';

    // Show modal
    setTimeout(() => {
        showSuccessModal();
    }, 500);
});

function triggerConfetti() {
    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 9999 };

    function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
    }

    const interval = setInterval(function () {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
            return clearInterval(interval);
        }

        const particleCount = 50 * (timeLeft / duration);

        confetti(Object.assign({}, defaults, {
            particleCount,
            origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
        }));
        confetti(Object.assign({}, defaults, {
            particleCount,
            origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
        }));
    }, 250);
}

function showSuccessModal() {
    successModal.classList.add('active');

    // Set message directly (No typewriter)
    successMessage.textContent = "Yes! I knew you loved me, মৌনতা! 💖";

    initSlideshow();
}

// ===== Slideshow Logic =====
function initSlideshow() {
    const slides = document.querySelectorAll('.slide');

    // Create dots
    slideDots.innerHTML = '';
    slides.forEach((_, index) => {
        const dot = document.createElement('span');
        dot.className = 'dot';
        if (index === 0) dot.classList.add('active');
        // dot.addEventListener('click', () => goToSlide(index)); // Optional: keep or remove dots interaction? Keeping for now.
        slideDots.appendChild(dot);
    });

    showSlide(currentSlide);
}

function showSlide(n) {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');

    // Check bounds
    if (n >= slides.length) currentSlide = 0;
    if (n < 0) currentSlide = slides.length - 1;

    // Remove active class from all
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    // Activate new slide
    slides[currentSlide].classList.add('active');
    if (dots[currentSlide]) {
        dots[currentSlide].classList.add('active');
    }
}

function changeSlide(n) {
    currentSlide += n;
    showSlide(currentSlide);
}

// Auto-advance slideshow
setInterval(() => {
    if (successModal.classList.contains('active')) {
        changeSlide(1);
    }
}, 4000); // 4 seconds per slide

// ===== Keyboard Shortcuts =====
// Removed arrow keys for slideshow since UI arrows are gone (optional, but cleaner)
/*
document.addEventListener('keydown', (e) => {
    if (successModal.classList.contains('active')) {
        if (e.key === 'ArrowLeft') changeSlide(-1);
        if (e.key === 'ArrowRight') changeSlide(1);
    }
});
*/

console.log('💕 Valentine\'s Day Website loaded successfully! - VERSION 8.0 (DOM FIX) 💕');
console.log('Debugging: Button moved to BODY to escape transform context');
