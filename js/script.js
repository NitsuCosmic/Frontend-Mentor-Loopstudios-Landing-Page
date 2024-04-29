const navMenu = document.getElementById("nav-menu");
const openIcon = document.getElementById("open-menu-icon");
const closeIcon = document.getElementById("close-menu-icon");

function openMenu() {
  navMenu.classList.add("open");
}

function closeMenu() {
  navMenu.classList.remove("open");
}

openIcon.addEventListener("click", () => {
  openMenu()
})

closeIcon.addEventListener("click", () => {
  closeMenu()
})