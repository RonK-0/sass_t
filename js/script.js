const toggleMenu = document.querySelector("#toggleMenu");
const dropdown = document.querySelector("#menu");
const body = document.querySelector("body");

toggleMenu.addEventListener("click", () => {
    dropdown.classList.toggle("open");
    body.classList.toggle("open");
});
// toggleMenu.addEventListener("click", (e) => {
//     dropdown.classList.toggle("open");
//     body.classList.toggle("open");
// });

var slider = tns({
    container: '.trending__slider',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    autoplayButtonOutput: false,
    nav: false,
    controlsText: [
        '<i class="fas fa-arrow-left-long"></i>',
        '<i class="fas fa-arrow-right-long"></i>'
    ],
    responsive: {
        420: {
          items: 3,
          gutter: 20,
        },
      },
});