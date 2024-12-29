document.getElementById("menuButton").addEventListener("click", () => {
  const menu = document.getElementById("dropdownMenu");
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
});

document.getElementById("menuButton2").addEventListener("click", function () {
  const menu = document.getElementById("dropdownMenu2");
  if (menu.style.display === "none" || menu.style.display === "") {
    menu.style.display = "block"; // Gør menuen synlig
  } else {
    menu.style.display = "none"; // Skjul menuen
  }
});

document.getElementById("lukButton2").addEventListener("click", function () {
  const menu = document.getElementById("dropdownMenu2");
  menu.style.display = "none"; // Skjul menuen når luk-knappen er trykket
});
