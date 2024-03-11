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