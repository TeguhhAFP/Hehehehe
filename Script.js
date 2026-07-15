function openSurprise() {
    const intro = document.getElementById("intro-screen");
    intro.style.opacity = "0";

    setTimeout(() => {
        intro.classList.add("hidden");

        const mainScreen = document.getElementById("main-screen");
        const card = document.getElementById("card");

        mainScreen.classList.remove("hidden");

        setTimeout(() => {
            card.classList.remove("scale-95", "opacity-0");
            card.classList.add("scale-100", "opacity-100");
        }, 50);

        fireConfetti();
    }, 700);
}

function fireConfetti() {
    const duration = 4000;
    const end = Date.now() + duration;

    (function frame() {
        confetti({
            particleCount: 5,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: ["#ec4899", "#a855f7", "#fbbf24", "#ffffff"]
        });

        confetti({
            particleCount: 5,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: ["#ec4899", "#a855f7", "#fbbf24", "#ffffff"]
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    })();
}
