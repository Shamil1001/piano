function Buttons() {
  const blacks = document.querySelectorAll(".black");
  const whites = document.querySelectorAll(".white");

  blacks.forEach((black, i) => {
    const n = i + 15;
    const urlb = "./24pianoKeys/key" + n + ".mp3";
    black.addEventListener("click", () => {
      new Audio(urlb).play();
    });
  });

  whites.forEach((white, j) => {
    const n = j < 9 ? "0" + (j + 1) : j + 1;
    console.log(n);
    const urlw = "./24pianoKeys/key" + n + ".mp3";
    white.addEventListener("click", () => {
      new Audio(urlw).play();
    });
  });
}

Buttons();
