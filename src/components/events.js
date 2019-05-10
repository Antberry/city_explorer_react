import React from 'react';
import superagent from 'superagent';

class Events extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      eventData: []
    }
  }
  
  receiveEventData = async (loc) => {
    let eventStuff = await superagent.get(`https://mysterious-river-14511.herokuapp.com/events/`).query({data: loc});

    let eventData = eventStuff.body;
    this.setState({eventData});
    console.log(this.state.eventData);
  }

  componentDidMount(){ // this will only be called on intial render
    if(this.props.location){
      this.receiveEventData(this.props.location);
    }
  }

  // console.log(location);
  componentDidUpdate(previousProps){ // this
    console.log('location in update', this.props.location);
    if(this.props.location !== previousProps.location){
      this.receiveEventData(this.props.location);
    }
  }

  render() {
    return (
      <React.Fragment>
        <section className="events-container">
        <h3>Results from EventBrite API</h3>
        <ul className="events-results">{this.state.eventData.map((item,i) => {
              return (<li key={i}>
              <a href={item.link }>{item.name }</a>
              <p>Event Date: { item.event_date }</p>
              <p>{ item.summary }</p>
            </li>)
        })}
        </ul>
      </section>
      </React.Fragment>
    );
  }
}

export default Events;