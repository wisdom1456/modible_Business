import "alpinejs";

const feather = require("feather-icons");

// Some random colors
const colors = ["#F56164", "#F7AA45", "#E0DB4A", "#45F76A", "#69CCF5"];

const numBalls = 20;
const balls = [];

for (let i = 0; i < numBalls; i++) {
    let ball = document.createElement("div");
    ball.classList.add("ball");
    ball.style.background = colors[Math.floor(Math.random() * colors.length)];
    ball.style.left = `${Math.floor(Math.random() * 60) + 20}vw`;
    ball.style.top = `${Math.floor(Math.random()) + 10}vh`;
    ball.style.transform = `scale(${Math.random()})`;
    ball.style.width = `${Math.random() * 1.5}em`;
    ball.style.height = ball.style.width;

    var element = document.getElementById('balls');
    if (typeof (element) != 'undefined' && element != null) {
        balls.push(ball);
        element.append(ball);
    }
}

// Keyframes
balls.forEach((el, i, ra) => {
    let to = {
        x: Math.random() * (i % 2 === 0 ? -5 : 5),
        y: 20

    };

    let anim = el.animate(
        [
            { transform: "translate(0, 0)" },
            { transform: `translate(${to.x}rem, ${to.y}rem)` }
        ],
        {
            duration: (Math.random() + 1) * 3000, // random duration
            direction: "alternate",
            fill: "both",
            iterations: Infinity,
            easing: "ease-in-out"
        }
    );
});

console.log(`I was loaded at ${Date(Date.now()).toString()}`);