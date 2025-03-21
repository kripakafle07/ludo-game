// Simple Dice Rolling Logic
function rollDice() {
    let dice = Math.floor(Math.random() * 6) + 1;
    document.getElementById("dice-result").innerText = "You rolled: " + dice;
}

// Optional: Generate Ludo grid boxes
const board = document.getElementById("ludo-board");
for (let i = 0; i < 225; i++) {
    const cell = document.createElement("div");
    board.appendChild(cell);
}
