import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = ({cityValue,getCityValue,getCurrentWeather,data}) => {
    
    const handleClick = (e) => {
        if(e.keyCode === 13) {
            getCurrentWeather(cityValue)
            getCityValue('')
        }
    }

    return(
        <div className="row">
            <div className='col-lg-8 search-bar'>
                <input  onKeyDown={handleClick}  
                        value={cityValue} 
                        onChange={e => getCityValue(e.target.value)}   
                        placeholder='Search Location...' 
                />
                <i className="fa fa-search fa-box" aria-hidden="true"></i>
            </div>
            <div className='col-lg-4 nav-bar' >
                <ul>
                    <li><NavLink to='/Home'>Home</NavLink></li>
                    <li><NavLink to='/Weather'>Weather</NavLink></li>
                    <li><NavLink to='/Contact'>Contact</NavLink></li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar 
