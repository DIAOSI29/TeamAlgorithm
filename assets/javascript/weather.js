$(document).ready(function () {

    /*
    === 
    === 
    === CODES INCLUDED HERE HAS BEEN PLACED
    ===         ON JAVASCRIPT.JS
    === 
    === 
    */

    /*
    var currentWeather = "";
    var imgWeatherURL = "";
    var locationName = "";
    var temperature = "";
    var tempMin = 0;
    var tempMax = 0;

    function getWeather() {
        console.log("f:getWeather() - START");
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
    function setWeather() {
        console.log("f:setWeather() - START");
        $(".ExtraInfo").css("height", "60px");
        $(".currentWeather").css("position", "absolute");
        $(".currentWeather").css("place-items", "normal");
        $(".conditions").empty();
        $(".conditions").append('<img src="' + imgWeatherURL + '">');
        $("#city.location").text(locationName);
        $(".temp").text(temperature + "°");
        $(".minTemp").text("Lo " + tempMin + "°");
        $(".maxTemp").text("Hi " + tempMax + "°");
    }

    function kelvinToCelsius(kelvin) {
        // return (kelvin - 273.15) * 1.80 + 32; =======> RETURN TO FAHRENHEIT
        return (kelvin - 273.15);
    }
*/
});