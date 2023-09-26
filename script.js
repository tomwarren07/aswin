// Function to generate a random number between min and max
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// Function to enhance text with fancy animation
const enhanceText = (id) => {
    const element = document.getElementById(id);
    const text = element.innerText.split("");

    element.innerText = "";

    text.forEach((value, index) => {
        const outer = document.createElement("span");
        outer.className = "outer";

        const inner = document.createElement("span");
        inner.className = "inner";
        inner.style.animationDelay = `${getRandomNumber(-5000, 0)}ms`;

        const letter = document.createElement("span");
        letter.className = "letter";
        letter.innerText = value;
        letter.style.animationDelay = `${index * 1000}ms`;

        inner.appendChild(letter);
        outer.appendChild(inner);
        element.appendChild(outer);
    });
};

// Enhance the text with the "fancy" class
enhanceText("channel-link");

// Blob animation on pointer move
const blob = document.getElementById("blob");
window.onpointermove = (event) => {
    const { clientX, clientY } = event;
    blob.style.left = `${clientX}px`;
    blob.style.top = `${clientY}px`;
};

// Text animation on hover
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let interval = null;

document.querySelector("h1").onmouseover = (event) => {
    let iteration = 0;
    clearInterval(interval);

    interval = setInterval(() => {
        event.target.innerText = event.target.innerText
            .split("")
            .map((letter, index) => {
                if (index < iteration) {
                    return event.target.dataset.value[index];
                }

                return letters[Math.floor(Math.random() * 26)];
            })
            .join("");

        if (iteration >= event.target.dataset.value.length) {
            clearInterval(interval);
        }

        iteration += 1 / 3;
    }, 30);
};
