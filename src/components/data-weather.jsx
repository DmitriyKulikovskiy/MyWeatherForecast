import React from 'react'
import { dateCreator, getTime } from '../date-creator/date-creator'
import { Preloader } from '../assets/preloader/preloader'
import { setTemperature } from '../assets/assisting-function'

const DataWeather = ({data,isLoading,error}) => {
    const setData = () => {
        if(data && Array.isArray(data)){
            return (
                <div className="main-container">
                    <div className="row box-row-container justify-content-center">
                        <div className="col-lg-7">
                            {data.map(i => <div className='weather-box' key={i.id}>
                                <div className='weatherConditions'>
                                    {i.weather[0].main === 'Rain' ? <i className="fa fa-tint" aria-hidden="true"></i> : null}
                                    {i.weather[0].main === 'Clouds' ? <i className="fa fa-cloud" aria-hidden="true"></i> : null }
                                    {i.weather[0].main === 'Clear' ? <i className="fa fa-sun-o" aria-hidden="true"></i> : null }
                                </div>
    
                                <div className="temperature">
                                    {Math.ceil(i.main.temp)}
                                    <i className="celsius">&#176;С</i>
                                    <span>{i.weather.map(w => w.description)}</span>
                                </div>
                            </div>
                            )}
                        </div>
                        <div className="col-lg-5 ">
                            { data.map(i => 
                            <div className='time-box' key={i.id}>
                                {dateCreator(new Date())}
                                <br />
                                <div className='country'>{i.sys.country},</div>
                                <div className='city'>{i.name}</div>
                            </div>)}
                        </div>
                        <div className="col-lg-11">
                            {data.map(el => 
                                <div key={el.id} className='details-current-weather text-center'>
                                    <div className="col-lg-6">
                                        <div>
                                            Min/Max temperature: {setTemperature(el.main.temp_min)} / {setTemperature(el.main.temp_max)} 
                                        </div>
                                        <div>Pressure: {el.main.pressure} hPa</div>
                                        <div>Humidity: {el.main.humidity}%</div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div>Wind speed: {el.wind.speed} m/s</div>
                                        <div>Cloudiness: {el.clouds.all}%</div>
                                        <div>Sunrise: {getTime(el.sys.sunrise)} h/m</div>
                                        <div>Sunset: {getTime(el.sys.sunset)} h/m</div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <hr/>
                </div>
            )
        }else {
            return isLoading === true ? <Preloader /> : null
        }
    }
    return (
        <div>
            {error === '' ? null : <div className='city-error'>{error}</div>}
            {setData()}
        </div>
    )
}

export default DataWeather