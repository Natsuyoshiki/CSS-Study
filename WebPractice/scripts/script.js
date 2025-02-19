document.addEventListener("DOMContentLoaded",function () {
    const darkModeToggle = document.querySelector(".dark-mode-toggle");
    const bgMusic = document.getElementById("bg-music");

    darkModeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });
    window.toggleMusic = function() {
        if (bgMusic.paused) {
            bgMusic.play();
        } else {
            bgMusic.pause();
        }
    }
});