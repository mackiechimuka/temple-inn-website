const requestURL =
  "https://askhope.github.io/wdd230-final/data/temples-list.json";

const cards = document.querySelector(".temples");

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); // temporary checking for valid response and data parsing
    const temple = jsonObject["temples"];
    temple.forEach(displayTemples);
  });

function displayTemples(temple) {
  // Create elements to add to the document
  let card = document.createElement("section");
  let image = document.createElement("img");
  let temple_name = document.createElement("h2");
  let location = document.createElement("p");
  let address = document.createElement("p");
  let phone = document.createElement("p");
  let email = document.createElement("p");
  let services = document.createElement("p");
  let history = document.createElement("p");
  let ord_schedule = document.createElement("p");
  let ses_schedule = document.createElement("p");
  let clos_schedule = document.createElement("p");
  let like = document.createElement("img");
  const likes_display = document.createElement("span");
  let like_count = Number(window.localStorage.getItem(temple.templeName));

  image.setAttribute("src", temple.imageUrl);
  image.setAttribute("class", "temple");
  image.setAttribute("alt", "images/like.png");
  image.setAttribute("loading", "lazy");

  like.setAttribute("src", "images/like.png");
  like.setAttribute("class", "like");
  like.setAttribute("id", temple.templeName);

  temple_name.textContent = temple.templeName;
  address.textContent = "Address: " + temple.address;
  location.textContent = "Location: " + temple.location;
  phone.textContent = "Phone: " + temple.phone;
  email.textContent = "Email: " + temple.email;
  services.textContent = "Services: " + temple.services;
  history.textContent = "History: " + temple.history;
  ord_schedule.textContent = "Ordinance schedule: " + temple.ordinance_schedule;
  ses_schedule.textContent = "Session schedule: " + temple.session_schedule;
  clos_schedule.textContent = "Closure schedule: " + temple.closure_schedule;
  likes_display.textContent = " " + like_count + " likes.";

  card.appendChild(image);
  card.appendChild(temple_name);
  card.appendChild(address);
  card.appendChild(location);
  card.appendChild(phone);
  card.appendChild(email);
  card.appendChild(services);
  card.appendChild(history);
  card.appendChild(ord_schedule);
  card.appendChild(ses_schedule);
  card.appendChild(clos_schedule);
  card.appendChild(like);
  card.appendChild(likes_display);

  // Add/append the existing HTML div with the cards class with the section(card)
  cards.appendChild(card);

  function addLike() {
    // increment the number of likes.
    like_count++;
    // store the new number of likes value
    localStorage.setItem(like.id, like_count);
    window.location.reload();
  }

  like.onclick = addLike;
}