//
const {clear, log, dir, error, warn} = console;
const {random, max, min, floor, round, ceil, PI} = Math;
const {parse, stringify} = JSON;
const doc = document;
const {head, body} = doc;
const mouse = {
    x: undefined,
    y: undefined
};
let hue = 0;
function id(element){
    return doc.getElementById(element);
};
function all(element){
    return doc.querySelectorAll(element);
};
function query(element){
    return doc.querySelector(element);
};
function classes(element){
    return doc.getElementsByClassName(element);
};
function insert(element, insertElement, when){
    const html = `
    <${element} class="${element}" id="${element}"><${element}>
    `;
    insertElement.insertAdjacentHTML(when, html);
};
const resetBtn = query(".resetBtn");
const tiesDiv = query(".ties");
const games_count = query(".games_count");
const div = query(".whoWonDiv");
const robotsWins = query("#robotsWins");
const playersWins = query("#playersWins");
const RPS = ["👊", "🖐️", "✌️"];
window.addEventListener("mousemove", e => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
});
function changeHue(){
    hue+=random() * 3;
};
setInterval(changeHue, 10);
