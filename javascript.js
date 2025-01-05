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

//  pauseskærm til om mig
// vis pauseskærmen
function showPauseScreen() {
  const pauseScreen = document.getElementById("pause");
  pauseScreen.classList.add("show");
}

// skjul pauseskærmen
function hidePauseScreen() {
  const pauseScreen = document.getElementById("pause");
  pauseScreen.classList.remove("show");
}

// event listeners
document.querySelectorAll(".pause-link").forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    showPauseScreen();

    // 2 sekunder
    setTimeout(() => {
      window.location.href = this.href;
    }, 2500);
  });
});
// pauseskærm til mine projekter
// vis pauseskærmen
function showPause2Screen() {
  const pauseScreen = document.getElementById("pause2");
  pauseScreen.classList.add("show");
}

// skjul pauseskærmen
function hidePause2Screen() {
  const pauseScreen = document.getElementById("pause2");
  pauseScreen.classList.remove("show");
}

// event listeners
document.querySelectorAll(".pause-link2").forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    showPause2Screen();

    // 2 sekunder
    setTimeout(() => {
      window.location.href = this.href;
    }, 2500);
  });
});
