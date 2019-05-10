import React from 'react';
import superagent from 'superagent';

class Weather extends React.Component {
  constructor(props){
    super(props);
    
    this.state = {
      weatherData: []
    };
  }
  receiveData = async (latitude, longitude) => {
    let weatherStuff = await superagent.get(`https://city-explorer-backend.herokuapp.com/weather/`).query({data: {'latitude': latitude, 'longitude': longitude}});

    let weatherData = weatherStuff.body;
    this.setState({weatherData});
    // console.log(this.state.weatherData);
    
  }
  
  render() {
    if(this.props.location.latitude && this.props.location.longitude){
      this.receiveData(this.props.location.latitude, this.props.location.longitude);
    }
    return (
      <React.Fragment>
        <section className="weather-container">
        <h3>Results from Dark Sky API</h3>
        <ul className="weather-results">{this.state.weatherData.map((item,i) => <li key={i}>{item}</li>)
        }</ul>
      </section>
      </React.Fragment>
    );
  }
}

export default Weather;