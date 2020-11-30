//DATE AND TIME
  let now = new Date ();
  let currentDate= document.querySelector (".today"); 
    let date =now.getDate();
    let hours=now.getHours();
     if (hours < 10) {
        hours = `0${hours}`;
        } else {`${hours}`}
    let year=now.getFullYear();
    let minutes=now.getMinutes()
        if (minutes < 10) {
        minutes = `0${minutes}`;
        } else {`${minutes}`}

    let days= ["Sunday", "Monday", "Tueday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day=days[now.getDay()];

    let months=["January", "February", "March","April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let month=months[now.getMonth()];

    function change() {
    let today=`${day} ${date} ${month} ${year}, ${hours}:${minutes}`;
    currentDate.innerHTML = today;
    }

    change();

//FORM

function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  let city = response.data.name;
  let h2City = document.querySelector("#card-city");
  h2City.innerHTML = city;
  let h2Temp = document.querySelector("#card-temperature");
  h2Temp.innerHTML = temperature + "°C";
}
function citySearch (event) {
  event.preventDefault ();
  let citySearchInput = document.querySelector("#exampleInputText");
  let h2City = document.querySelector("#card-city");
  h2City.innerHTML = `${citySearchInput.value}°C`;
  let apiKey = "b19a3f432de5f615851032aa1c827b12";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${citySearchInput.value}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
}

let form = document.querySelector("#find-city");
form.addEventListener("submit", citySearch);

//CURRENT LOCATION
function searchLocation(position) {
  let apiKey = "b19a3f432de5f615851032aa1c827b12";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
}


function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}

let currentLocationButton = document.querySelector(".currentLocation");
currentLocationButton.addEventListener("click", getCurrentLocation);