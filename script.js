const apiKey = '12798d8f65914dc2854194541242310';

// XHR
function searchWithXHR() {
    var city = document.getElementById("input").value;

    var highTemp = document.getElementById("high");
    var lowTemp = document.getElementById("low");
    var wind = document.getElementById("wind");

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let responseObj = JSON.parse(xhr.responseText);
            
            highTemp.innerText = `High: ${responseObj.current.feelslike_c}C`;
            lowTemp.innerText = `Low: ${responseObj.current.temp_c}C`;
            wind.innerText = `Wind Speed: ${responseObj.current.wind_kph} kph`;
        }
    };
    xhr.open("GET", `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`, true);
    xhr.send();
}

// Fetch 
function searchWithFetch() {
    var city = document.getElementById("input").value;

    var highTemp = document.getElementById("high");
    var lowTemp = document.getElementById("low");
    var wind = document.getElementById("wind");

    fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found');
            }
            return response.json();
        })
        .then(data => {
            highTemp.innerText = `High: ${data.current.feelslike_c}C`; // Use data here
            lowTemp.innerText = `Low: ${data.current.temp_c}C`; // Use data here
            wind.innerText = `Wind Speed: ${data.current.wind_kph} kph`; // Use data here
        })
        
}

// Fetch and (Async/Await)
async function searchWithFetchAwAs() {
    var city = document.getElementById("input").value;

    var highTemp = document.getElementById("high");
    var lowTemp = document.getElementById("low");
    var wind = document.getElementById("wind");

   
        let response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`);
        if (!response.ok) {
            throw new Error('City not found');
        }

        let data = await response.json();
        highTemp.innerText = `High: ${data.current.feelslike_c}C`; // Use data here
        lowTemp.innerText = `Low: ${data.current.temp_c}C`; // Use data here
        wind.innerText = `Wind Speed: ${data.current.wind_kph} kph`; // Use data here
    
}

// listeners
document.getElementById("getWeatherXHR").addEventListener("click", searchWithXHR);
document.getElementById("getWeatherFetch").addEventListener("click", searchWithFetch);
document.getElementById("getWeatherAsyncAwait").addEventListener("click", searchWithFetchAwAs);

