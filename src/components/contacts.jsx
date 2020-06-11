import React from 'react'
import { NavLink } from 'react-router-dom'

const Contact = () => {
    return (
        <div className="container">
            <div className="row box-contacts">
                <div className="col-sm-12 text-center contacts-container">
                    <div className="contact-with-me">
                        Would you like to contact with me? 
                        <i className="fa fa-smile-o" aria-hidden="true"></i>
                    </div>
                    <a href='https://t.me/dmitriy_k23' className='fa fa-telegram fa-2x'></a>
                    <a href='https://www.linkedin.com/in/dmitriy-kulikovskiy-1467711a2/?locale=ru_RU' className='fa fa-linkedin fa-2x'></a>
                    <a href='https://github.com/DmitriyKulikovskiy' className='fa fa-github fa-2x'></a>

                    <div className="return-to-other-pages">
                        <div className="title-return-pages">
                            Back to  <span className='back-home'><NavLink to='/Home'>Home</NavLink></span> | <span className='back-weather'><NavLink to='/Weather'>Weather</NavLink></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact