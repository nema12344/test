const scenes = [
  {
    title: "Do you love me? 🥺",
    subtitle: "rvm is all yours",
    art: "https://media1.tenor.com/m/gVE-ahB5mSsAAAAd/teddy-bear.gif",
  },
  {
    title: "Please think again! 🙄",
    subtitle: "itni jaldi na matt bolo🥺",
    art: "https://media1.tenor.com/m/DWd17R4xaSQAAAAd/teddy-bear.gif",
  },
  {
    title: "Ek aur baar soch lo! 😣",
    subtitle: "kyu aisa kar rahi ho pls maan jao😢",
    art: "https://media1.tenor.com/m/kOAwXXnX8HMAAAAd/teddy-bear-cute-teddy-bear.gif",
  },
  {
    title: "beautiful pls maan jao na! Kitna code likh waogi😭",
    subtitle: "bhut glt baat hai yrr😭",
    art: "https://media1.tenor.com/m/tgqZdD673OIAAAAd/teddy-bear.gif",
  },
  {
    title: "I knew it! You love me a lot 😘 ekta jaan",
    subtitle: "",
    art: "https://media1.tenor.com/m/J1Fc9yvhCHIAAAAd/teddy-bear.gif",
    final: true,
  },
];

let noClicks = 0;
let dodging = false;

const titleEl = document.getElementById("title");
const subEl = document.getElementById("subtitle");
const artEl = document.getElementById("art");
const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const actions = document.getElementById("actions");

function setScene(idx) {
  const s = scenes[idx];
  titleEl.textContent = s.title;
  subEl.textContent = s.subtitle;
  artEl.src = s.art;
  if (s.final) {
    noBtn.style.display = "none";
    yesBtn.style.display = "none";
  }
}

function moveNoButton() {
  const box = actions.getBoundingClientRect();
  const btn = noBtn.getBoundingClientRect();
  const maxX = box.width - btn.width;
  const maxY = box.height - btn.height;
  const x = Math.max(0, Math.random() * maxX);
  const y = Math.max(0, Math.random() * maxY);
  noBtn.style.position = "absolute";
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
}

noBtn.addEventListener("click", () => {
  noClicks += 1;
  if (noClicks === 1) setScene(1);
  if (noClicks === 2) setScene(2);
  if (noClicks >= 3) {
    setScene(3);
    dodging = true;
  }
});

noBtn.addEventListener("mouseenter", () => {
  if (dodging) moveNoButton();
});

noBtn.addEventListener("touchstart", (e) => {
  if (dodging) {
    e.preventDefault();
    moveNoButton();
  }
});

yesBtn.addEventListener("click", () => {
  setScene(4);
});

setScene(0);
