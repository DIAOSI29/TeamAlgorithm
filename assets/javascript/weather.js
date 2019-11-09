$(document).ready(function () {

    var currentWeather = "";
    var imgWeatherURL = "";
    var locationName = "";
    var temperature = "";
    var tempMin = 0;
    var tempMax = 0;

    function getWeather() {
        console.log("getWeather()");
        let queryURL = "https://api.openweathermap.org/data/2.5/weather?" + "apikey=6505c8f81f8f8f339430c41eea7b91b1&";
        var getIP = 'http://ip-api.com/json/';
        var openWeatherMap = 'http://api.openweathermap.org/data/2.5/weather'
        $.getJSON(getIP).done(function (location) {
            queryURL += "lon=" + location.lon + "&lat=" + location.lat;
            $.ajax({ url: queryURL, method: "GET" }).then(function (weather) {
                console.log(weather.name + " " + weather.main.temp);
                console.log(weather);
                locationName = weather.name;
                temperature = kelvinToCelsius(weather.main.temp).toFixed(1);
                imgWeatherURL = "http://openweathermap.org/img/wn/" + weather.weather[0].icon + "@2x.png";
                tempMin = kelvinToCelsius(weather.main.temp_min).toFixed(1);
                tempMax = kelvinToCelsius(weather.main.temp_max).toFixed(1);
                console.log(imgWeatherURL);

                setWeather();
            })
        });
    }
    getWeather();

    function setWeather() {

        // $("#weather").append('<img src="' + imgWeatherURL + '">');
        // let dataIMG = $('<div>');
        // let dataLocName = $('<div>');
        // let dataTemp = $('<div>');
        // let dataTempMin = $('<div>');
        // let dataTempMax = $('<div>');

        // $("#weather").append(dataIMG.append('<img src="' + imgWeatherURL + '">'));
        // $("#weather").append(dataLocName.text("Location: " + locationName));
        // $("#weather").append(dataTemp.text("Temperature(°C): " + temperature));
        // $("#weather").append(dataTempMin.text("Minimum Temperature(°C): " + tempMin));
        // $("#weather").append(dataTempMax.text("Minimum Temperature(°C): " + tempMax));

        $("#weather").append($('<div>').append('<img src="' + imgWeatherURL + '">'));
        $("#weather").append($('<div>').text("Location: " + locationName));
        $("#weather").append($('<div>').text("Temperature(°C): " + temperature));
        $("#weather").append($('<div>').text("Minimum Temperature(°C): " + tempMin));
        $("#weather").append($('<div>').text("Minimum Temperature(°C): " + tempMax));
    }

    // var getIP = 'http://ip-api.com/json/';
    // var openWeatherMap = 'http://api.openweathermap.org/data/2.5/weather'
    // $.getJSON(getIP).done(function (location) {

    // })

    function kelvinToCelsius(kelvin) {
        // return (kelvin - 273.15) * 1.80 + 32; =======> RETURN TO FAHRENHEIT
        return (kelvin - 273.15);
    }

})