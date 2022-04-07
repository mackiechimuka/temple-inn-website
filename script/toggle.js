const date1 = new Date();
const year = date1.getFullYear();
document.getElementById("currentyear").textContent = year;

const date2 = document.querySelector('#currentdate');

document.querySelector(".last-updated").textContent = `Last Updated: ${document.lastModified}`;
