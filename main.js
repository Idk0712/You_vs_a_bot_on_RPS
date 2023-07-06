const log = console.log;
const doc = document;
const body = doc.body;
const head = doc.head;
let hue = 0;
doc.addEventListener("keydown", e => {
    if(e.key == "F12") e.preventDefault();
});
const div = doc.querySelector(".whoWonDiv");
const robotsWins = doc.querySelector("#robotsWins");
const playersWins = doc.querySelector("#playersWins");
robotsWins.textContent = "🤖's wins: 0"
playersWins.textContent = "player's wins: 0";
let RPS = ["rock", "paper", "scissors"];
let pChoice;
let computerChoice;
let playersWin = 0;
let computersWins = 0;
function rockBtnClick() {
    pChoice = "rock";
    computerChoice = RPS[Math.floor(Math.random() * RPS.length)];
    if(pChoice === "rock" && computerChoice === "rock") {
        div.textContent = `You chose ${pChoice}, and the computer chose ${computerChoice}.\nIt's a tie!`;
    }
    if(pChoice === "rock" && computerChoice === "paper") {
        computersWins++;
        robotsWins.textContent = `🤖's wins: ${computersWins}`;
        div.textContent = `You chose ${pChoice}, and the computer chose ${computerChoice}.\nThe computer won!`;
    }
    if(pChoice === "rock" && computerChoice === "scissors") {
        playersWin++;
        playersWins.textContent = `player's wins: ${playersWin}`;
        div.textContent = `You chose ${pChoice}, and the computer chose ${computerChoice}.\nYou won!`;
    }
};
function paperBtnClick() {
    pChoice = "paper";
    computerChoice = RPS[Math.floor(Math.random() * RPS.length)];
    if(pChoice === "paper" && computerChoice === "rock") {
        playersWin++;
        playersWins.textContent = `player's wins: ${playersWin}`;
        div.textContent = `You chose ${pChoice}, and the computer chose ${computerChoice}.\nYou won!`;
    }
    if(pChoice === "paper" && computerChoice === "paper") {
        div.textContent = `You chose ${pChoice}, and the computer chose ${computerChoice}.\nIt's a tie!`;
    }
    if(pChoice === "paper" && computerChoice === "scissors") {
        computersWins++;
        robotsWins.textContent = `🤖's wins: ${computersWins}`;
        div.textContent = `You chose ${pChoice}, and the computer chose ${computerChoice}.\nThe computer won!`;
    }
};
function scissorsBtnClick() {
    pChoice = "scissors";
    computerChoice = RPS[Math.floor(Math.random() * RPS.length)];
    if(pChoice === "scissors" && computerChoice === "rock") {
        computersWins++;
        robotsWins.textContent = `🤖's wins: ${computersWins}`;
        div.textContent = `You chose ${pChoice}, and the computer chose ${computerChoice}.\nThe computer won!`;
    }
    if(pChoice === "scissors" && computerChoice === "paper") {
        playersWin++;
        playersWins.textContent = `player's wins: ${computersWins}`
        div.textContent = `You chose ${pChoice}, and the computer chose ${computerChoice}.\nYou won!`;
    }
    if(pChoice === "scissors" && computerChoice === "scissors") {
        div.textContent = `You chose ${pChoice}, and the computer chose ${computerChoice}.\nIt's a tie!`;
    }
};
function changeHue() {
    hue+=Math.random() * 3;
};
setInterval(changeHue, 10);
setInterval(() => {
    div.style.color = `hsl(${hue}, 100%, 50%)`;
}, 10);
