let timer;
let isRunning = false;
let seconds = 0;

const display = document.getElementById("display");
const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");

function updateDisplay() {
    const hours = String(Math.floor(seconds / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
    const secs = String(seconds % 60).padStart(2, '0');
    display.textContent = `${hours}:${minutes}:${secs}`;
}

startBtn.addEventListener("click", () => {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(() => {
            seconds++;
            updateDisplay();
        }, 1000);
    }
});

pauseBtn.addEventListener("click", () => {
    isRunning = false;
    clearInterval(timer);
});

resetBtn.addEventListener("click", () => {
    isRunning = false;
    clearInterval(timer);
    seconds = 0;
    updateDisplay();
});

// Inicializa el temporizador en la pantalla
updateDisplay();
