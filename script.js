// Changing background color
document.getElementById("colorBtn").addEventListener("click", function() {
    const colors = ["#ff6f61", "#ff1493", "#ff6347", "#ffb6c1", "#ff4c4c"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});

// Confetti effect
document.getElementById("confettiBtn").addEventListener("click", function() {
    const container = document.getElementById("emojiContainer");
    const emojis = ["❤️", "😍", "💌", "🌹", "💖"];
    const numConfetti = 30;

    for (let i = 0; i < numConfetti; i++) {
        const emoji = document.createElement("div");
        emoji.classList.add("emoji");
        emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        emoji.style.animationDuration = `${Math.random() * 3 + 2}s`;
        emoji.style.animationDelay = `${Math.random() * 2}s`;
        container.appendChild(emoji);
    }
});

// Popup Love Letter
document.getElementById("popupBtn").addEventListener("click", function() {
    document.getElementById("popup").style.display = "flex";
});

// Close Popup
document.getElementById("closePopup").addEventListener("click", function() {
    document.getElementById("popup").style.display = "none";
});
