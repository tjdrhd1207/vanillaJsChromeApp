const API_KEY = "ae87869e795cdb6f905821cd248e2b89";

//https://api.openweathermap.org/data/2.5/weather?lat=37.4897604&lon=127.0328394&appid=ae87869e795cdb6f905821cd248e2b89

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    console.log(URL);
    fetch(URL).then(response => response.json()).then(data => {
        const weatherImg = document.querySelector("#weatherImg");
        const weather = document.querySelector("#weather span:nth-child(2)");
        const city = document.querySelector("#weather span:nth-child(3)");
        
        weatherImg.src = ` http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        weather.innerText = `${data.weather[0].main} / ${Math.floor(data.main.temp)}`;  
        city.innerText = data.name;
    });
}

function onGeoError(){
    alert("Can't find you. No weather for you");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

