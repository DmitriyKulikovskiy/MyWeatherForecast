
import { API } from "../assets/api"
import { getWeatherData, loader, getDailyData, showRequestError, clearArray } from "./weather-reducer"

export const getCurrentWeather = (data) => async dispatch => {
    //set loader
    dispatch(loader(true))

    //current weather request
    let dataWeather = await API.searchWeather(data).then(res => res.json())
    if( dataWeather.cod === '400' || dataWeather.cod === '404'){
        //in case of error - show error
        dispatch(showRequestError('The city is not found'))
        //clear array to prevent error [0] of undefined
        dispatch(clearArray())
    }else {
        dispatch(getWeatherData(dataWeather))
        dispatch(showRequestError(''))
    } 

    //get lat,lon coordinates 
    let lat = dataWeather.cod === '400' || dataWeather.cod === '404' ? null : dataWeather.coord.lat
    let lon = dataWeather.cod === '400' || dataWeather.cod === '404' ? null : dataWeather.coord.lon

    //daily weather request
    let dailyWeather = await API.searchDailyWeather(lat,lon).then(res => res.json()) 

    if(dailyWeather.cod === '404'){
        dispatch(clearArray())
    }else {
        dispatch(getDailyData(dailyWeather))
    }
    
    dispatch(loader(false))  
}