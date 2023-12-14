let prevScrollPos = window.pageYOffset;
const header = document.querySelector(".header");

window.addEventListener("scroll", function () {
  let currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
    header.style.top = "0";
  } else {
    header.style.top = "-100px";
  }

  prevScrollPos = currentScrollPos;
});
