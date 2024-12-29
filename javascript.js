document.getElementById("menuButton").addEventListener("click", () => {
  const menu = document.getElementById("dropdownMenu");
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
});

//   MENU
// Hent elementerne
const menuButton = document.getElementById("menuButton2");
const dropdownMenu = document.getElementById("dropdownMenu2");
const lukButton = document.getElementById("lukButton2");

// Vis menuen, når knappen er klikket
menuButton.addEventListener("click", () => {
  dropdownMenu.style.display = "block"; // Gør menuen synlig
});

// Luk menuen, når luk-knappen er klikket
lukButton.addEventListener("click", () => {
  dropdownMenu.style.display = "none"; // Skjul menuen
});

// Luk menuen, hvis brugeren klikker udenfor menuen
window.addEventListener("click", (event) => {
  if (!dropdownMenu.contains(event.target) && event.target !== menuButton) {
    dropdownMenu.style.display = "none";
  }
});
