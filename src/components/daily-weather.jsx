import React from 'react'
import { Preloader } from '../assets/preloader/preloader'
import { NavLink } from 'react-router-dom'
import { date } from '../date-creator/date-creator'


const DailyWeatherData = ({dailyData, isLoading}) => {

    let checkCod = dailyData.cod === '400' || dailyData.length === 0 

    // request returns weather for 10 day, but this app need only 6 days. Using slice to make new array with params it need.
    let sliceDailyData = dailyData.daily ? dailyData.daily.slice(1,7) : null

    //making preloader
    const getWeatherStatistic = () => {

        if(dailyData && Array.isArray(sliceDailyData)){
            return (
                <div className='row scrolling-wrapper justify-content-center'>
                    {sliceDailyData ? sliceDailyData.map(i => 
                        <div key={i.dt} className="col-lg-3 box-daily-weather">
                            <div className='date-box'>
                                {date(i.dt)}
                            </div>
                            <NavLink to={'/WeatherDayStat/' + i.dt.toString()}>
                                <div className="temp-day">
                                    {Math.ceil(i.temp.day)}°C
                                </div>
                                <div className="feels-like">
                                    Feels like: {Math.ceil(i.feels_like.day)}°C
                                </div>
                                <div className="daily-weather-condition">
                                    Condition: {i.weather.map(i => i.main)} 
                                </div>
                            </NavLink>
                        </div>
                   ) : null}
                </div>
            )
        } else {
            return isLoading === true ? <Preloader /> : null
        }
    }
    
    return ( 
        <div> 
            <div className="daily-weather-container">
                {checkCod ? null : <div className="daily-title">Daily Weather</div>}
                {getWeatherStatistic()}
                <div className="keep-up-to-date">
                    {checkCod ? <p>Keep up to date with the latest weather</p> : null}
                </div>
            </div> 
        </div>
    )
}

export default DailyWeatherData