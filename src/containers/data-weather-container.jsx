import React from 'react'
import { connect } from 'react-redux'
import DataWeather from '../components/data-weather'

class DataWeatherContainer extends React.Component {

    render(){
        return (
            <DataWeather {...this.props} />
        )
    }
}

const mapStateToProps = state => ({
    data: state.weatherReducer.data,
    isLoading: state.weatherReducer.isLoading,
    error: state.weatherReducer.error
})

export default connect(mapStateToProps)(DataWeatherContainer)