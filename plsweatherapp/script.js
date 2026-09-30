function getWeather() {
    const city = document.getElementById("cityInput").value;
    const apiKey = "a81fed51dca9a65957a4b7bc73bbd844";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a81fed51dca9a65957a4b7bc73bbd844`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("City not found!");
            }
            return response.json();
        })
        .then(data => {
            const resultDiv = document.getElementById("result");
            resultDiv.innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
        <p><strong>Weather:</strong> ${data.weather[0].description}</p>
        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" />
      `;
        })
        .catch(error => {
            document.getElementById("result").innerHTML = `<p style="color:red;">${error.message}</p>`;
        });
}
