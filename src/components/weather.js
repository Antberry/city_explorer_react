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
    let weatherStuff = await superagent.get(`https://mysterious-river-14511.herokuapp.com/weather/`).query({data: {'latitude': latitude, 'longitude': longitude}});

    let weatherData = weatherStuff.body;
    this.setState({weatherData});
    // console.log(this.state.weatherData);
    
  }

  componentDidMount(){ // this will only be called on intial render
    if(this.props.location){
      this.receiveData(this.props.location);
    }
  }

  // console.log(location);
  componentDidUpdate(previousProps){ // this
    if(this.props.location !== previousProps.location){
      this.receiveData(this.props.location);
    }
  }
  
  render() {
    return (
      <React.Fragment>
        <section className="weather-container">
        <h3>Results from Dark Sky API</h3>
        <ul className="weather-results">{this.state.weatherData.map((item,i) => {
        return (<li key={i}>
          The forecast for {item.time} is: {item.forecast}
        </li>)})
        }</ul>
      </section>
      </React.Fragment>
    );
  }
}

export default Weather;