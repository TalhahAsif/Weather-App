const cities = document.getElementById("cities");
const tempBox = document.getElementById("tempBox");

const citiesArray = [
  { name: "Karachi", latitude: 24.8607, longitude: 67.0011 },
  { name: "Lahore", latitude: 31.5497, longitude: 74.3436 },
  { name: "Islamabad", latitude: 33.6844, longitude: 73.0479 },
  { name: "Rawalpindi", latitude: 33.5651, longitude: 73.0169 },
  { name: "Faisalabad", latitude: 31.4504, longitude: 73.135 },
  { name: "Peshawar", latitude: 34.0151, longitude: 71.5249 },
  { name: "Quetta", latitude: 30.1798, longitude: 66.975 },
  { name: "Multan", latitude: 30.1575, longitude: 71.5249 },
  { name: "Gujranwala", latitude: 32.1877, longitude: 74.1945 },
  { name: "Sialkot", latitude: 32.4945, longitude: 74.5229 },
  { name: "Hyderabad", latitude: 25.396, longitude: 68.3578 },
  { name: "Sargodha", latitude: 32.0836, longitude: 72.6711 },
  { name: "Bahawalpur", latitude: 29.3956, longitude: 71.6821 },
  { name: "Sukkur", latitude: 27.7052, longitude: 68.8574 },
  { name: "Larkana", latitude: 27.5604, longitude: 68.2264 },
  { name: "Sheikhupura", latitude: 31.7131, longitude: 73.9783 },
  { name: "Mardan", latitude: 34.1983, longitude: 72.045 },
  { name: "Gujrat", latitude: 32.5731, longitude: 74.0783 },
  { name: "Mingora", latitude: 34.7717, longitude: 72.3604 },
  { name: "Nawabshah", latitude: 26.2483, longitude: 68.4096 },
];

citiesArray.forEach((data, ind) => {
  // console.log(data.name);
  cities.innerHTML += `<option value="${ind}">${data.name}</option>`;
});

cities.addEventListener("change", function () {
  changeWeather(
    citiesArray[this.value].latitude,
    citiesArray[this.value].longitude,
    showWeather
  );
});

const changeWeather = (lat = 24.8607, long = 67.0011, showWeather) => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=c153479685c47f1b34a83591f3b1acbe`
  )
    .then((res) => res.json())
    .then((data) => showWeather(data));
};

const showWeather = (data) => {

const haze = `https://www.flaticon.com/free-icons/fog`
const sunny = `https://www.flaticon.com/free-icons/weather`
const cloudy = `https://www.flaticon.com/free-icons/cloud`
const heavyCloud = `https://www.flaticon.com/free-icons/cloudy`
const littlebitCloudy = `https://www.flaticon.com/free-icons/cloudy`


const currentWeather = Math.round(data.main.temp) - 273
const max_temp = Math.round(data.main.temp_max) - 273
const min_temp = Math.round(data.main.temp_min) - 273
const feels_like = Math.round(data.main.feels_like) - 273

console.log(currentWeather);

  console.log(data);
  tempBox.innerHTML = `<div class="temperature">
            <img
              src= "http://openweathermap.org/img/w/${data.weather[0].icon}.png"
              alt=""
              class=""
              style="width: 200px; height: 200px"
            />
          </div>
          <div>
              <p class="gap-y-3">${data.name}</p>
            <h1 class="text-6xl">${currentWeather}<sup>o</sup></h1>
            <div class="flex gap-x-3 mt-3 text-lg font-medium">
              <p>Min Temp: ${min_temp}<sup>o</sup></p>
              <p>Max Temp:${max_temp}<sup>o</sup></p>
            </div>
            <div class="mt-5">
              <p>Feel like:${feels_like}<sup>o</sup></p>
              <p>humidity:${data.main.humidity}%</p>
              <p>Wind: ${data.wind.speed} mi/h</p>
            </div>
          </div>`;
};
