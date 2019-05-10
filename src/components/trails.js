import React from 'react';
import superagent from 'superagent';

class Trails extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      trailsData: []
    }
  }

  receiveTrailsData = async (latitude, longitude) => {
    let trailsStuff = await superagent.get(`https://city-explorer-backend.herokuapp.com/movies/`).query({data: {'latitude': latitude, 'longitude': longitude}});

    let trailsData = trailsStuff.body;
    this.setState({trailsData});
    // console.log(this.state.trailsData);
  }
  
  render() {
    if(this.props.location.latitude && this.props.location.longitude){
      this.receiveTrailsData(this.props.location.latitude, this.props.location.longitude);
    }
    return (
    <>
      <section className="trails-container">
      <h3>Results from Hiking Project API</h3>
      <ul className="trails-results">{this.state.trailsData.map((item,i) => <li key={i}>{item}</li>)
      }</ul>
    </section>
    </>
    );
  }
}

export default Trails;