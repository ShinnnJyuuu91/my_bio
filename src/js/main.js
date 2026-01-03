const welcome = document.getElementById("welcome");
const main = document.getElementById("mainContent");
const enterBtn = document.getElementById("enterBtn");

setTimeout(showMain, 2000);
enterBtn.addEventListener("click", showMain);

function showMain() {
  welcome.classList.add("opacity-0");
  setTimeout(() => {
    welcome.style.display = "none";
    main.classList.remove("hidden");
  }, 700);
}

const scrollEls = document.querySelectorAll(".animate-scroll");

window.addEventListener("scroll", () => {
  scrollEls.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add("show");
    }
  });
});
