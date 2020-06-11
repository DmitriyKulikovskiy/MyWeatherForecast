
export const API = {
    // current weather
    searchWeather(value) {
        return fetch(`//api.openweathermap.org/data/2.5/weather?q=${value}&units=metric&APPID=c642720d21a1266566dcdf10018f3866`)
    },
    searchDailyWeather(lat,lon){
        //daily weather
        // &units=metric to convert calvin in celsius
       return fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=hourly&appid=c642720d21a1266566dcdf10018f3866`)
    }
} 


