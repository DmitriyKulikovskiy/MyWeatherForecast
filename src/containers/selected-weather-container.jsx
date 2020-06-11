import React from 'react'
import { connect } from 'react-redux'
import OpenDetailWeather from '../components/selected-day-weather'


class SelectedWeatherContainer extends React.Component {

    render(){
        return (
            <OpenDetailWeather {...this.props} />
        )
    }
}

const mapStateToProps = state => ({
    dailyData: state.weatherReducer.dailyData,
    isLoading: state.weatherReducer.isLoading
})

export default connect(mapStateToProps)(SelectedWeatherContainer)