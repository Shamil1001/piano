function Buttons() {
  const white = document.querySelector(".wh");
  const black = document.querySelector(".bl");

  for (let i = 0; i < 14; i++) {
    var whitebtns = `<button id=${i}>${i}</button>`;
    let item1 = document.createElement("div");
    item1.classList.add("white");
    item1.innerHTML = whitebtns;
    white.appendChild(item1);
  }
  for (let i = 0; i < 10; i++) {
    var blackbtns = `<button>${i}</button>`;
    let item2 = document.createElement("div");
    item2.classList.add("black");
    item2.innerHTML = blackbtns;
    black.appendChild(item2);
  }
}

Buttons();
