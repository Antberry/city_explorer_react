import React from 'react';
import superagent from 'superagent';

class Events extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      eventData: []
    }
  }
  
  receiveEventData = async (latitude, longitude) => {
    let eventStuff = await superagent.get(`https://city-explorer-backend.herokuapp.com/events/`).query({data: {'latitude': latitude, 'longitude': longitude}});

    let eventData = eventStuff.body;
    this.setState({eventData});
    console.log(this.state.eventData);
  }

  render() {
    if(this.props.location.latitude && this.props.location.longitude){
      this.receiveEventData(this.props.location.latitude, this.props.location.longitude);
    }
    return (
      <React.Fragment>
        <section className="events-container">
        <h3>Results from EventBrite API</h3>
        <ul className="events-results">{this.state.eventData.map((item,i) => <li key={i}>{item}</li>)
        }</ul>
      </section>
      </React.Fragment>
    );
  }
}

export default Events;