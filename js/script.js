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

btnTheme.addEventListener("click", () => {
  if(body.classList.contains('dark')){
    body.classList.remove('dark');
    root.style.setProperty('--light', '#fff');
    root.style.setProperty('--dark', '#000');
  }
  else{
    body.classList.add('dark');
    root.style.setProperty('--light', '#000');
    root.style.setProperty('--dark', '#fff');
  }
});