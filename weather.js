const weather = document.querySelector(".js-weather");

const API_KEY = "84323778fcf6258068cf59c83a63176c";
//API (Application Programming Interface)

const COORDS = "coords";

function getWeather(lat, log){
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}(&appid=${API_KEY}&units=metric`).then(function(response){
        console.log(response.json);
    });
}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position){
    const latitude=position.coords.latitude;
    const longitude=position.coords.longitude;
    const coordsObj = {
        latitude: latitude,
        longitutde: longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude)
}

function handleGeoError(){
    console.log("Can't access geo location")
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords(){
    const loadedCords = localStorage.getItem(COORDS);
    if(loadedCoords === null){
        askforCoords();
    }
    else{
        const parseCoords = JSON.parse(loadedCoords);
        getWeather(parsedCoords.latitude, parsedCoords.longitude);
    }
}












function init(){

}
init();