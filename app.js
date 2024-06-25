fetch(
  "https://api.openweathermap.org/data/2.5/weather?lat=24.860966&lon=66.990501&appid=c153479685c47f1b34a83591f3b1acbe"
)
  .then((res) => res.json())
  .then((data) => console.log(data));
