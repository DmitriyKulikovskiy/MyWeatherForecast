import React from 'react'
import { connect } from 'react-redux'
import DailyWeatherData from '../components/daily-weather'



class DailyWeatherContainer extends React.Component {
    render(){
        return (
            <DailyWeatherData {...this.props} />
        )
    }
}

const mapStateToProps = state => ({
    dailyData: state.weatherReducer.dailyData,
    isLoading: state.weatherReducer.isLoading
})

export default connect(mapStateToProps)(DailyWeatherContainer)