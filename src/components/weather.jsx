import React from 'react'
import NavContainer from '../containers/nav-container'
import DataWeatherContainer from '../containers/data-weather-container'
import DailyWeatherContainer from '../containers/daily-weather-container'

const Weather = () => {

    return(
        <div className='container weather-container'>
            <NavContainer />
            <DataWeatherContainer />
            <DailyWeatherContainer />
        </div>
    )
    
}

export default Weather
