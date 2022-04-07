const apiURL = "https://api.openweathermap.org/data/2.5/onecall?lat=43.44&lon=-92.04&exclude=hourly,minutely&units=imperial&appid=c0c96f6b560d532a74ad73b558a917eb";



fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.querySelector('#temp').textContent = Math.round(jsObject.current.temp);
    const iconsrc= `https://openweathermap.org/img/wn/${jsObject.current.weather[0].icon}@2x.png`;
    const desc = jsObject.current.weather[0].description;
    document.querySelector('#wind-speed').textContent =jsObject.current.wind_speed;
    document.querySelector('#humidity').textContent = jsObject.current.humidity;
    document.querySelector('#description').textContent =jsObject.current.weather[0].description;
    document.querySelector('#today-weather').setAttribute('src', iconsrc);
    document.querySelector('#today-weather').setAttribute('alt', desc);
    
    document.querySelector('#temp1').textContent =jsObject.daily[0].temp.day;
    document.querySelector('#temp2').textContent =jsObject.daily[1].temp.day;
    document.querySelector('#temp3').textContent =jsObject.daily[2].temp.day;


  });


