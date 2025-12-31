// ================= TYPED.JS =================
new Typed(".text", {
    strings: ["Special ✨", "Beautiful 💖", "A Blessing 🌸"],
    typeSpeed: 120,
    backSpeed: 70,
    loop: true
});

// ================= POPUP =================
function showMessage() {
    createButterflies(); // show butterflies
    document.getElementById("giftPopup").style.display = "flex";

    // Play video1 & fairy sound after button click
    const fairySound = document.getElementById("fairySound");
    const video1 = document.getElementById("video1");
    

    video1.muted = false;       // ensure sound is on
    video1.play().catch(e => console.log(e));

    fairySound.currentTime = 1;
    fairySound.volume = 0.8;
    fairySound.play().catch(e => console.log(e));
}

function closePopup() {
    document.getElementById("giftPopup").style.display = "none";

    // stop videos and sound
    const video1 = document.getElementById("video1");
    const video2 = document.getElementById("video2");
    const fairySound = document.getElementById("fairySound");

    video1.pause();
    video2.pause();
    fairySound.pause();
}

// ================= VIDEOS =================
function playNextVideo() {
    const v1 = document.getElementById("video1");
    const v2 = document.getElementById("video2");

    v1.pause();
    v1.currentTime = 0;
    v1.style.display = "none";

    v2.style.display = "block";
    v2.muted = false; 
    v2.play().catch(e => console.log(e));
}

// ================= BUTTERFLIES =================
function createButterflies() {
    const container = document.getElementById("butterflyContainer");
    container.innerHTML = ""; // clear previous butterflies

    const totalButterflies = 200;
    const spawnPoints = 100;

    // create 20 random spawn points
    const points = [];
    for (let i = 0; i < spawnPoints; i++) {
        points.push({
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight
        });
    }

    // create butterflies from those points
    for (let i = 0; i < totalButterflies; i++) {
        const butterfly = document.createElement("div");
        butterfly.className = "butterfly";

        const point = points[i % spawnPoints];
        butterfly.style.left = point.x + "px";
        butterfly.style.top = point.y + "px";

        butterfly.style.transform = `scale(${1 + Math.random() * 0.8})`; // bigger butterflies
        butterfly.style.setProperty("--randX", Math.random());
        butterfly.style.animationDelay = Math.random() * 2 + "s";

        container.appendChild(butterfly);

        setTimeout(() => butterfly.remove(), 8000);
    }

    // optional sparkles from button
    const btn = document.querySelector(".btn");
    const rect = btn.getBoundingClientRect();
    createSparkles(container, rect);
}

// ================= SPARKLES =================
function createSparkles(container, rect) {
    for (let i = 0; i < 4; i++) {
        const sparkle = document.createElement("div");
        sparkle.className = "sparkle";

        sparkle.style.left =
            rect.left + rect.width / 2 + Math.random() * 20 - 10 + "px";
        sparkle.style.top =
            rect.top + rect.height / 2 + Math.random() * 20 - 10 + "px";

        container.appendChild(sparkle);
        setTimeout(() => sparkle.remove(), 1500);
    }
}

// ================= FAIRY SOUND =================
function playFairySound() {
    const sound = document.getElementById("fairySound");
    sound.currentTime = 0;
    sound.volume = 0.4;
    sound.play().catch(e => console.log(e));
}
