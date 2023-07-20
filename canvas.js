/** @type {HTMLCanvasElement} */
const canvas = query(".cursorCanvas"),
    c = canvas.getContext("2d");
canvas.width = innerWidth;

canvas.height = innerHeight;

window.addEventListener("resize", () => {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
});

class Circle{
    constructor(x, y, radius){
        this.x = x;
        this.y = y;
        this.radius = radius;
    };
    draw(){
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, PI * 2, false);
        c.lineWidth = 5;
        c.strokeStyle = `hsl(${hue}, 100%, 50%)`;
        c.stroke();
    };
};

function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0, 0, canvas.width, canvas.height);
    const x = mouse.x;
    const y = mouse.y;
    const radius = 30;
    const circle1 = new Circle(x, y, radius);
    circle1.draw();
    c.fillStyle = "blue";
    c.font = "bold 35px sans-serif";
    c.fillText(".", x - 5, y + 3);
};
animate();
