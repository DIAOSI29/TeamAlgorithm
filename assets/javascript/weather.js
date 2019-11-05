$(document).ready(function () {

    function getWeather() {
        console.log("getWeather()");
        let queryURL = "https://api.openweathermap.org/data/2.5/weather?" + "apikey=6505c8f81f8f8f339430c41eea7b91b1&";
        var getIP = 'http://ip-api.com/json/';
        var openWeatherMap = 'http://api.openweathermap.org/data/2.5/weather'
        $.getJSON(getIP).done(function (location) {
            queryURL += "lon=" + location.lon + "&lat=" + location.lat;
            $.ajax({ url: queryURL, method: "GET" }).then(function (weather) {
                console.log(weather.name + " " + weather.main.temp);
            })
        });
    }
    getWeather();

    // var getIP = 'http://ip-api.com/json/';
    // var openWeatherMap = 'http://api.openweathermap.org/data/2.5/weather'
    // $.getJSON(getIP).done(function (location) {

    // })

})