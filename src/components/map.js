import React from 'react';
// import Dotenv from 'dotenv';


class Map extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      latitude: null,
      longitude: null,
    }
  }
  render() {
    return (
      <div>
        <img src = {`https://maps.googleapis.com/maps/api/staticmap?center=${this.props.latitude}%2c%20${this.props.longitude}&zoom=13&size=600x300&maptype=roadmap&key=${process.env.REACT_APP_GEOCODE_API_KEY}`}/>
      </div>
    );
  }
};

export default Map;