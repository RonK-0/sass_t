const toggleBtn = document.querySelector(".toggle_button");
const dropdown = document.querySelector(".dropdown");
const closeBtn = document.querySelector(".close");

//console.log(toggleBtn);

toggleBtn.addEventListener("click", () => {
    dropdown.classList.toggle("show");
    toggleBtn.classList.toggle("cross");
    toggleBtn.classList.toggle("hidden");
});
closeBtn.addEventListener("click", () => {
    dropdown.classList.remove("show");
    toggleBtn.classList.remove("cross");
    toggleBtn.classList.remove("hidden");
});
