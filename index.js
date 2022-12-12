function Buttons() {
  const pianoKeys = document.querySelectorAll(".key");

  pianoKeys.forEach((pianoKey, i) => {
    const num = i < 9 ? "0" + i : i + 1;
    const url = "./24pianoKeys/key" + num + ".mp3";
    pianoKey.addEventListener("click", () => {
      new Audio(url).play();
    });
  });
}

Buttons();
