import React from 'react'
import { date, getTime } from '../date-creator/date-creator';
import { setTemperature } from '../assets/assisting-function';
import {NavLink} from 'react-router-dom'

const OpenDetailWeather = ({match,dailyData}) => {
    const {params} = match; 
    const {id} = params;
    let sliceDailyData = dailyData.daily ? dailyData.daily.slice(1,7) : null

    return (
        <div className="container">
            {sliceDailyData.map(el => el.dt.toString() === id 
                ?   <div key={el.dt} className="box-selected row justify-content-center">

                        <div className="sel-day">
                            {date(el.dt)}
                        </div>
        
                        <hr />

                        <div className="day-column col-lg-5">
                            <div className="day-title">Day</div> 
                            <hr/>   
                            <div>Sunrise: {getTime(el.sunrise)} h/m</div>
                            <div>Morning temperature: {setTemperature(el.temp.morn)}</div>
                            <div>Day temperature: {setTemperature(el.temp.day)}</div>   
                            <div>Feels like: {setTemperature(el.feels_like.day)}</div>                       
                        </div>

                        <div className="night-column col-lg-5">
                            <div className="night-title">Night</div>
                            <hr/>
                            <div>Sunset: {getTime(el.sunset)} h/m</div>
                            <div>Evening temperature: {setTemperature(el.temp.eve)}</div>
                            <div>Night temperature: {setTemperature(el.temp.night)}</div>
                            <div>Feels like: {setTemperature(el.feels_like.night)}</div> 
                        </div>

                        <div className="other-column col-lg-5">
                            <div className="other-title">Other</div>
                            <hr/>
                            <div>Pressure: {el.pressure} hPa</div>
                            <div>Wind speed: {el.wind_speed} m/s</div>
                            <div>Wind gust: {el.wind_gust} m/s</div>
                            <div>Cloudiness: {el.clouds}% </div>
                        </div>
                        
                        <div className="weather-column col-lg-5">
                            <div className="weather-title">Weather</div>
                            <hr/>
                            {el.weather.map((el ,index) => 
                                <div key={index}>
                                    <div>Weather condition: {el.main}</div>
                                    <div>Description: {el.description}</div>
                                </div>
                            )}
                            <div>Precipitation volume: {el.rain}mm</div>
                            <div>Humidity: {el.humidity}</div>
                        </div>

                        <div className="col-lg-12 button-back">
                            <NavLink to='/Weather/'>
                                Go back
                                <i className="fa fa-arrow-left" aria-hidden="true"></i>
                            </NavLink>
                        </div>
                    </div>
                : null
            )}
        </div>
    )
}

export default OpenDetailWeather