let menuBar = document.querySelector(".fa-bars");
let navBar = document.querySelector(".nav-bar");
let header = document.querySelector(".header-3");
let scrollTop = document.querySelector(".scroll-top");
menuBar.onclick = function () {
  menuBar.classList.toggle("fa-times");
  navBar.classList.toggle("active");
};
window.onscroll = function () {
  menuBar.classList.remove("fa-times");
  navBar.classList.remove("active");
  if (window.scrollY > 250) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
  if (window.scrollY > 250) {
    scrollTop.style.display = "initial";
  } else {
    scrollTop.style.display = "none";
  }
};

var swiper = new Swiper(".home-slider", {
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
});

let countDate = new Date("august 20, 2028 00:00:00").getTime();
function countDown() {
  let now = new Date().getTime();
  gap = countDate - now;
  let seconds = 1000;
  let minutes = seconds * 60;
  let hours = minutes * 60;
  let day = hours * 24;
  let d = Math.floor(gap / day);
  let h = Math.floor((gap % day) / hours);
  let min = Math.floor((gap % hours) / minutes);
  let sec = Math.floor((gap % minutes) / seconds);
  document.getElementById("day").innerHTML = d;
  document.getElementById("hours").innerHTML = h;
  document.getElementById("minutes").innerHTML = min;
  document.getElementById("seconds").innerHTML = sec;
}
setInterval(function () {
  countDown();
}, 1000);
