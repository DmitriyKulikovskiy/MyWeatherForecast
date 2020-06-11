import React from 'react'
import { NavLink } from 'react-router-dom'

const HomePage = () => {
    return (
        <div className="container">
            <div className="row home-box">
                <div className="col-sm-12 text-center ">
                    <div className="title-home">
                        Find out the weather for 7 days using our application.
                    </div>
                    <div className="start">
                        <span className="circle"></span>

                        <NavLink to='/Weather/'>
                            Start
                            <i className="fa fa-play" aria-hidden="true"></i>
                        </NavLink>

                        <span className="circle"></span>
                    </div>
                    <div className='made'>Made by <b>Dima Kulikovskiy </b> &#169; 2020</div>
                </div>
            </div>
        </div> 
    )
}

export default HomePage