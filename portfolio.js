// function myFunction() {
//     var x = document.getElementById("myLinks");
//     if (x.style.display === "block") {
//       x.style.display = "none";
//     } else {
//       x.style.display = "block";
//     }
//   }


function toggleMenu(event) {
    console.log("toggleMenu");
    let nav = document.querySelector(".header");
    nav.classList.toggle("header__nav--active");
  }
  
  window.addEventListener("DOMContentLoaded", function () {
    AOS.init();
  
    let filled = document.querySelectorAll(".skill__filled");
  
    filled.forEach(function (bar) {
      let width = bar.getAttribute("data-percent");
      bar.style.width = `${width}%`;
    });
  
    jarallax(document.querySelectorAll(".jarallax"), {
      speed: 0.2,
    });
  
    let menuButton = document.querySelector(".header__button");
    menuButton.addEventListener("click", toggleMenu);
  });
  
  function toggleNav(event) {
    let bar = document.querySelector(".header");
    if (window.pageYOffset > 35) {
      bar.classList.add("scroll-down");
    } else {
      bar.classList.remove("scroll-down");
    }
  }
  
  window.addEventListener("scroll", toggleNav);