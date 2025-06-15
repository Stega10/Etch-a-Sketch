function getRandomRgbColor() {
     const r = Math.floor(Math.random() * 256);
     const g = Math.floor(Math.random() * 256);
     const b = Math.floor(Math.random() * 256);
     return `rgb(${r}, ${g}, ${b})`;}


function createGrid(N) {
  container.innerHTML = "";
  for (let i = 0; i < N * N; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.width = 960 / N + "px";
    square.style.height = 960 / N + "px";

    square.addEventListener("mouseenter", () => {
      square.style.backgroundColor = getRandomRgbColor();
    });

    container.appendChild(square);
  }
};


// default
const container = document.querySelector(".container")
createGrid(16)

// custom
const button = document.querySelector("button")
button.addEventListener("click",() => {
    let N = parseInt(prompt("Give me a  number:"))
    if (N > 100 || N < 1 || isNaN(N)) {
        message.textContent ="Wrong input. Try again!";
        return;
    };

    message.textContent = "";

    createGrid(N);
    });







