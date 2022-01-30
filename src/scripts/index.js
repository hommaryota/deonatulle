// Top scroll
const topBtn = document.querySelector("#topBtn");
topBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Item scroll
const itemBtn = document.querySelector(".link");
const item = document.querySelector(".item");
itemBtn.addEventListener("click", function () {
  item.scrollIntoView({
    block: "center",
    behavior: "smooth",
  });
});

// loader
window.onload = function () {
  const spinner = document.getElementById("loader-bg");
  spinner.classList.add("loaded");
};
