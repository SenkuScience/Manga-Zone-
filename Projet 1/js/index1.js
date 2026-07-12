const btndark = document.querySelector(".btn-dark");
const body = document.body;
const btnLight = document.querySelector(".btn-light");
const btntheme = document.querySelector(".theme-nav");
const theme = document.querySelector(".theme");

btndark.addEventListener("click", () => {
  body.classList.toggle("theme-white");
  btntheme.classList.toggle("btn-theme-move");
  btnLight.classList.toggle("vision");
  btndark.classList.toggle("vision1");
  btntheme.classList.toggle("vision2");
  btntheme.style.transition = "0.5s ease-in-out";
});
