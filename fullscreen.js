document.addEventListener("click", () => {
    const gameElement = document.documentElement; // Fullscreen applies to the full page

    if (gameElement.requestFullscreen) {
        gameElement.requestFullscreen();
    } else if (gameElement.webkitRequestFullscreen) {
        gameElement.webkitRequestFullscreen();
    } else if (gameElement.msRequestFullscreen) {
        console.log("Fullscreen is not supported in this browser.");
    }
});
