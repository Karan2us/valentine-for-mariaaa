// Game 1: No → Yes trick
const noBtn = document.getElementById('no-btn');
let clickCount = 0;

noBtn.addEventListener('mouseover', () => {
    // Make button run away
    noBtn.style.transform = translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px);
});

noBtn.addEventListener('click', () => {
    clickCount++;
    
    if(clickCount === 3) {
        noBtn.textContent = "Okay maybe... 😏";
    } else if(clickCount === 5) {
        noBtn.textContent = "YES! 😍";
        noBtn.style.background = "#ff6b6b";
        noBtn.style.color = "white";
        noBtn.disabled = true;
    }
});

// Game 2: Love meter
const clickHeart = document.getElementById('click-heart');
const meterBar = document.querySelector('.meter-bar');
let loveLevel = 0;

clickHeart.addEventListener('click', () => {
    loveLevel += 10;
    meterBar.style.width = loveLevel + "%";
    
    if(loveLevel >= 100) {
        document.querySelector('.love-meter p').textContent = "100% IN LOVE! WILL YOU BE MINE? 💍";
    }
});

// Slide navigation
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
document.querySelector('.next-btn').addEventListener('click', () => {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
});

// Confetti effect when "Yes" is clicked
document.getElementById('yes-btn').addEventListener('click', () => {
    // Add confetti library or create simple animation
    alert("🎉 YAY! Let's fill the world with love! 💖");
    for(let i = 0; i < 50; i++) {
        createConfetti();
    }
});

function createConfetti() {
    const confetti = document.createElement('div');
    confetti.textContent = '🎉';
    confetti.style.position = 'fixed';
    confetti.style.left = Math.random() * 100 + '%';
    confetti.style.animation = confettiFall ${Math.random() * 3 + 2}s linear;
    document.body.appendChild(confetti);
    
    setTimeout(() => confetti.remove(), 5000);
}
