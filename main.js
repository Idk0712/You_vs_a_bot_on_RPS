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
robotsWins.textContent = "🤖's wins: 0"
playersWins.textContent = "player's wins: 0";
const RPS = ["👊", "🖐️", "✌️"];
let computerChoice;
let playersWin = 0;
let computersWins = 0;
let gamesCount = 0;
let ties = 0;
doc.addEventListener("keydown", e => {
    if(e.key === "r" || e.key === "R") {
        playersWin=0;
        computersWins=0;
        gamesCount=0;
        ties=0;
        tiesDiv.textContent = `Ties: ${ties}`;
        games_count.textContent = `Games: ${gamesCount}`;
        robotsWins.textContent = `🤖's wins: ${computersWins}`;
        playersWins.textContent = `player's wins: ${playersWin}`;
    }
});
function rockBtnClick(pChoice) {
    gamesCount++;
    games_count.textContent = `Games: ${gamesCount}`;
    computerChoice = RPS[Math.floor(Math.random() * RPS.length)];
    if(pChoice === RPS[0] && computerChoice === RPS[0]) {
        ties++;
        tiesDiv.textContent = `Ties: ${ties}`;
        div.textContent = `You: ${pChoice}, 🤖: ${computerChoice}`;
    }
    if(pChoice === RPS[0] && computerChoice === RPS[1]) {
        computersWins++;
        robotsWins.textContent = `🤖's wins: ${computersWins}`;
        div.textContent = `You: ${pChoice}, 🤖: ${computerChoice}`;
    }
    if(pChoice === RPS[0] && computerChoice === RPS[2]) {
        playersWin++;
        playersWins.textContent = `player's wins: ${playersWin}`;
        div.textContent = `You: ${pChoice}, 🤖: ${computerChoice}`;
    }
};
function paperBtnClick(pChoice) {
    gamesCount++;
    games_count.textContent = `Games: ${gamesCount}`;
    computerChoice = RPS[Math.floor(Math.random() * RPS.length)];
    if(pChoice === RPS[1] && computerChoice === RPS[0]) {
        playersWin++;
        playersWins.textContent = `player's wins: ${playersWin}`;
        div.textContent = `You: ${pChoice}, 🤖: ${computerChoice}`;
    }
    if(pChoice === RPS[1] && computerChoice === RPS[1]) {
        ties++;
        tiesDiv.textContent = `Ties: ${ties}`;
        div.textContent = `You: ${pChoice}, 🤖: ${computerChoice}`;
    }
    if(pChoice === RPS[1] && computerChoice === RPS[2]) {
        computersWins++;
        robotsWins.textContent = `🤖's wins: ${computersWins}`;
        div.textContent = `You: ${pChoice}, 🤖: ${computerChoice}`;
    }
};
function scissorsBtnClick(pChoice) {
    gamesCount++;
    games_count.textContent = `Games: ${gamesCount}`;
    computerChoice = RPS[Math.floor(Math.random() * RPS.length)];
    if(pChoice === RPS[2] && computerChoice === RPS[0]) {
        computersWins++;
        robotsWins.textContent = `🤖's wins: ${computersWins}`;
        div.textContent = `You: ${pChoice}, 🤖: ${computerChoice}`;
    }
    if(pChoice === RPS[2] && computerChoice === RPS[1]) {
        playersWin++;
        playersWins.textContent = `player's wins: ${playersWin}`
        div.textContent = `You: ${pChoice}, 🤖: ${computerChoice}`;
    }
    if(pChoice === RPS[2] && computerChoice === RPS[2]) {
        ties++;
        tiesDiv.textContent = `Ties: ${ties}`;
        div.textContent = `You: ${pChoice}, 🤖: ${computerChoice}`;
    }
};
function changeHue() {
    hue+=Math.random() * 3;
};
setInterval(changeHue, 10);
setInterval(() => {
    div.style.color = `hsl(${hue}, 100%, 50%)`;
}, 10);
