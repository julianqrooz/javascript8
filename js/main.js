let i = document.querySelector("i");
let nav = document.querySelector("nav");
let close = document.querySelector(".close");

i.onclick = function () {
  nav.classList.add("open");
};
close.onclick = function () {
  this.parentElement.classList.remove("open");
};
document.onkeyup = function (e) {
  if (e.key === "Escape") {
    nav.classList.remove("open");
  }
};
