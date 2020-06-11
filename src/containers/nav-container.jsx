import React from 'react'
import NavBar from '../components/nav'
import { connect } from 'react-redux'
import { getCityValue } from '../redux/weather-reducer'
import { getCurrentWeather } from '../redux/thunk'

class NavContainer extends React.Component {

    render(){
        return (
            <NavBar {...this.props} />
        )
    }
}

const mapStateToProps = state => ({
    cityValue: state.weatherReducer.cityValue,
    data: state.weatherReducer.data
})

export default connect(mapStateToProps, {getCityValue,getCurrentWeather})(NavContainer)