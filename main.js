doc.addEventListener("keydown", e => {
    //if(e.key == "F12") e.preventDefault();
});
warn("Do not copy paste anything in there");
error("I repeat, I said do not copy paste anything in here");
const updateGame = JSON.parse(localStorage.getItem("update")) || {
    playersWin: 0,
    computersWins: 0,
    gamesCount: 0,
    ties: 0
};
let computerChoice;
resetBtn.addEventListener("click", () => {
    localStorage.removeItem("update");
    updateGame.playersWin = 0;
    updateGame.computerWins = 0;
    updateGame.gamesCount = 0;
    updateGame.ties = 0;
    robotsWins.textContent = `🤖's wins: ${updateGame.computersWins}`;
    playersWins.textContent = `player's wins: ${updateGame.playersWin}`;
    games_count.textContent = `Games: ${updateGame.gamesCount}`;
    tiesDiv.textContent = `Ties: ${updateGame.ties}`;
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
setInterval(() => {
    div.style.color = `hsl(${hue}, 100%, 50%)`;
}, 10);
