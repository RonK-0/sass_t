const toggleMenu = document.querySelector("#toggleMenu");
const dropdown = document.querySelector("#menu");
const body = document.querySelector("body");

toggleMenu.addEventListener("click", () => {
    dropdown.classList.toggle("open");
    body.classList.toggle("open");
});

const btnTheme = document.querySelector('.theme');
const root = document.querySelector(':root');
// const body = document.querySelector('body');
const icon = document.querySelector(".far");

btnTheme.addEventListener("click", () => {
  if(body.classList.contains('dark')){
    body.classList.remove('dark');
    root.style.setProperty('--light', '#fff');
    root.style.setProperty('--dark', '#000');
    root.style.setProperty('--gray', '#222');
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
  }
  else{
    body.classList.add('dark');
    root.style.setProperty('--light', '#333');
    root.style.setProperty('--dark', '#fff');
    root.style.setProperty('--gray', '#ccc');
    icon.classList.add("fa-sun");
    icon.classList.remove("fa-moon");
  }
});