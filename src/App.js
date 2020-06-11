import React from 'react';
import './index.sass'
import Weather from './components/weather';
import { Route, Redirect } from 'react-router-dom';
import Contact from './components/contacts';
import ModalWeatherContainer from './containers/selected-weather-container';
import HomePage from './components/home-page';

//using Redirect to show main page 

const App = () => {
  
  return (
    <div className="App">

     <Redirect to='/Home'/> 

     <Route path='/Home/' render={() => <HomePage />} />
     <Route path='/Weather/' render={() => <Weather /> }/> 
     <Route path='/WeatherDayStat/:id' render={({match}) => <ModalWeatherContainer match={match} /> }/>
     <Route path='/Contact/' render={() => <Contact />} />
    </div>
  );
}

export default App;
