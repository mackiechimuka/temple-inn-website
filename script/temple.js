const requestURL="https://mackiechimuka.github.io/temple-inn-website/data/data.json";
const cards= document.querySelector(".temples");

fetch(requestURL)
   .then(function(response){
    return response.json();
   })
   .then(function(jsonObject){
       console.table(jsonObject);//temporary check for valid response and data parsing
       const temple =jsonObject["data"];
       temple.forEach(showTemples);
   });
   function showTemples(temple){
       //creating html elements for our jsonObject
       let card = document.createElement("section");
       let timage = document.createElement("img");
       let name = document.createElement("h2");
       let phone = document.createElement("p");
       let address= document.createElement("p");
       let email = document.createElement("p");
       let services = document.createElement("p");
       let history = document.createElement("p");
       let ordiance = document.createElement("p");
       let session = document.createAttribute("p");
       let templeSchedule = document.createElement("p");
       let like = document.createElement("img");
       const likesdisplay =document.createElement("span");
       let numLikes = Number(window.localStorage.getItem(temple.name));
       let dislike = document.createElement("img");
       const dislikes= document.createElement("span");
       let numDisikes = Number(window.localStorage.getItem(temple.name));

       timage.setAttribute("src", temple.imageurl);
       timage.setAttribute("alt", "images/like.png");
       timage.setAttribute("loading", "lazy");

       like.setAttribute("src", "images/like.png");
       like.setAttribute("class", "like");
       like.setAttribute('id', temple.name);

       dislike.setAttribute("src", "images/like.png");
       dislike.setAttribute("class", "dislike");
       dislike.setAttribute("id", temple.name);

       name.textContent = temple.name;
       phone.textContent= "Phone" + temple.phone;
       address.textContent = "Address"+ temple.address;
       email.textContent = "Email" + temple.email;
       services.textContent = "Services" + temple.services;
       history.textContent = "History" + temple.history;
       ordiance.textContent = "Ordinance Schedule" + temple.ordianceSchedule;
       session.textContent = "Session Schedule" + temple.sessionSchedule;
       templeSchedule.textContent = "Temple Schedule" + temple.templeSchedule;
       likesdisplay.textContent = "" + numLikes +"likes";
       dislikes.textContent ="" + numDisikes + "dislikes"

       card.appendChild(timage);
       card.appendChild(name); 
       card.appendChild(address);
       card.appendChild(phone);
       card.appendChild(email);
       card.appendChild(services);
       card.appendChild(history);
       card.appendChild(ordiance);
       card.appendChild(templeSchedule);
       card.appendChild(session);
       card.appendChild(like);
       card.appendChild(likesdisplay);
       card.appendChild(dislike);
       card.appendChild(dislikes);

       //appending html class with section cards
       cards.appendChild(card)
      

       function sumLikes(){
        // add  number of likes.
        numLikes++;
        // store the new number of likes value
        
        localStorage.setItem(like.id, numLikes);
        window.location.reload();
    }
      like.onclick = sumLikes

      function addDislikes(){
        // add  number of dislikes.
        numDisikes++;
        // store the new number of dislikes value
        
        localStorage.setItem(dislike.id, numDisikes);
        window.location.reload();
    }
        dislike.onclick = addDislikes
     

   }