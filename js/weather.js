
const weather = document.querySelector("#wth span:nth-child(1)");
const city = document.querySelector("#wth span:nth-child(2)");
const temper = document.querySelector("#wth span:nth-child(3)");
const API_KEY = "a641e5a8d4ddd9eeab1f566b9f44f45d";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;    
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        weather.innerText = `현재 날씨 : ${data.weather[0].main} |`;
        city.innerText = `현재 위치 : ${data.name}`
        temper.innerText =  `| 현재 온도 : ${data.main.temp}℃`;
    });
}

function onGeoError() {
    alert("Can't find you. No weather for you");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);