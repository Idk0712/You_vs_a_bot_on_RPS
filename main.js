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
const games_count = doc.querySelector(".games_count");
const tiesDiv = doc.querySelector(".ties");
const RPS = ["👊", "🖐️", "✌️"];
let updateGame = JSON.parse(localStorage.getItem("update")) || {
    playersWin: 0,
    computersWins: 0,
    gamesCount: 0,
    ties: 0
};
let computerChoice;
doc.addEventListener("keydown", e => {
    if(e.key === "r") {
        localStorage.removeItem("update");
        updateGame.playersWin = 0;
        updateGame.computerWins = 0;
        updateGame.gamesCount = 0;
        updateGame.ties = 0;
        robotsWins.textContent = `🤖's wins: ${updateGame.computersWins}`;
        playersWins.textContent = `player's wins: ${updateGame.playersWin}`;
        games_count.textContent = `Games: ${updateGame.gamesCount}`;
        tiesDiv.textContent = `Ties: ${updateGame.ties}`;
    }
});
tiesDiv.textContent = `Ties: ${updateGame.ties}`;
games_count.textContent = `Games: ${updateGame.gamesCount}`;
robotsWins.textContent = `🤖's wins: ${updateGame.computersWins}`;
playersWins.textContent =  `player's wins: ${updateGame.playersWin}`;
function playGame(pChoice){
    updateGame.gamesCount++;
    games_count.textContent = `Games: ${updateGame.gamesCount}`;
    computerChoice = RPS[Math.floor(Math.random() * RPS.length)];
    if(pChoice === RPS[2] && computerChoice === RPS[0]) {
        updateGame.computersWins++;
        robotsWins.textContent = `🤖's wins: ${updateGame.computersWins}`;
        div.textContent = `You: ${pChoice} ${computerChoice} :🤖`;
    }
    if(pChoice === RPS[2] && computerChoice === RPS[1]) {
        updateGame.playersWin++;
        playersWins.textContent = `player's wins: ${updateGame.playersWin}`
        div.textContent = `You: ${pChoice} ${computerChoice} :🤖`;
    }
    if(pChoice === RPS[2] && computerChoice === RPS[2]) {
        updateGame.ties++;
        tiesDiv.textContent = `Ties: ${updateGame.ties}`;
        div.textContent = `You: ${pChoice} ${computerChoice} :🤖`;
    }
    if(pChoice === RPS[1] && computerChoice === RPS[0]) {
        updateGame.playersWin++;
        playersWins.textContent = `player's wins: ${updateGame.playersWin}`;
        div.textContent = `You: ${pChoice} ${computerChoice} :🤖`;
    }
    if(pChoice === RPS[1] && computerChoice === RPS[1]) {
        updateGame.ties++;
        tiesDiv.textContent = `Ties: ${updateGame.ties}`;
        div.textContent = `You: ${pChoice} ${computerChoice} :🤖`;
    }
    if(pChoice === RPS[1] && computerChoice === RPS[2]) {
        updateGame.computersWins++;
        robotsWins.textContent = `🤖's wins: ${updateGame.computersWins}`;
        div.textContent = `You: ${pChoice} ${computerChoice} :🤖`;
    }
    if(pChoice === RPS[0] && computerChoice === RPS[0]) {
        updateGame.ties++;
        tiesDiv.textContent = `Ties: ${updateGame.ties}`;
        div.textContent = `You: ${pChoice} ${computerChoice} :🤖`;
    }
    if(pChoice === RPS[0] && computerChoice === RPS[1]) {
        updateGame.computersWins++;
        robotsWins.textContent = `🤖's wins: ${updateGame.computersWins}`;
        div.textContent = `You: ${pChoice} ${computerChoice} :🤖`;
    }
    if(pChoice === RPS[0] && computerChoice === RPS[2]) {
        updateGame.playersWin++;
        playersWins.textContent = `player's wins: ${updateGame.playersWin}`;
        div.textContent = `You: ${pChoice} ${computerChoice} :🤖`;
    }
    localStorage.setItem("update", JSON.stringify(updateGame));
};
function changeHue() {
    hue+=Math.random() * 3;
};
setInterval(changeHue, 10);
setInterval(() => {
    div.style.color = `hsl(${hue}, 100%, 50%)`;
}, 10);
