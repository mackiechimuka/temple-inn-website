
function toggleMenu() {
  document.getElementById("navicon").classList.toggle("open");
  document.getElementById("hum-button").classList.toggle("open");
}

const x = document.getElementById("hum-button");
x.onclick = toggleMenu;


