import React from 'react';

class Weather extends React.Component {
  constructor(props){
    super(props);
  }
  
  render() {
    return (
      <React.Fragment>
      <section>
        <ul className="list">{url = `https://city-explorer-backend.herokuapp.com/location?data=${this.state.location}`}</ul>
        </section>
      </React.Fragment>
    );
  }
}

export default Weather;