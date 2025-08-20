let darkmode = localStorage.getItem("darkmode");
let themeswitch = document.getElementById("theme");

const enableDarkmode = () => {
  document.body.classList.add("darkmode");
  localStorage.setItem("darkmode", "active");
};

const disableDarkmode = () => {
  document.body.classList.remove("darkmode");
  localStorage.setItem("darkmode", null);
};

if (darkmode === "active") enableDarkmode();

themeswitch.addEventListener("click", () => {
  darkmode = localStorage.getItem("darkmode");
  darkmode !== "active" ? enableDarkmode() : disableDarkmode();
});

function changeToDesc() {
  const hero = document.getElementById("hero");
  const desc = document.getElementById("desc");

  hero.classList.remove("visible");
  hero.classList.add("hidden");

  desc.classList.remove("hidden");
  desc.classList.add("visible");
}

window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("hero").classList.add("visible");
  document.getElementById("desc").classList.add("hidden");
  document.getElementById("album").classList.add("hidden");
});

function changeToGalery() {
  const hero = document.getElementById("hero");
  const album = document.getElementById("album");

  hero.classList.remove("visible");
  hero.classList.add("hidden");

  album.classList.remove("hidden");
  album.classList.add("visible");
}

function backToHome() {
  const hero = document.getElementById("hero");
  const desc = document.getElementById("desc");
  const album = document.getElementById("album");

  desc.classList.remove("visible");
  desc.classList.add("hidden");

  album.classList.remove("visible");
  album.classList.add("hidden");

  hero.classList.remove("hidden");
  hero.classList.add("visible");
}


const sr = ScrollReveal({
  origin: "top",
  distance: "85px",
  duration: 2500,
  reset: true,
});

sr.reveal(".logo", { delay: 300 });
sr.reveal(".row", { delay: 400 });