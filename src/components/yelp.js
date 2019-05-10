import React from 'react';
import superagent from 'superagent';

class Yelp extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      yelpData: []
    };
  }

  receiveYelpData = async (latitude, longitude) => {
    let yelpStuff = await superagent.get(`https://city-explorer-backend.herokuapp.com/yelp/`).query({data: {'latitude': latitude, 'longitude': longitude}});

    let yelpData = yelpStuff.body;
    this.setState({yelpData});
 
  }
  render() {
    if(this.props.location.latitude && this.props.location.longitude){
      this.receiveYelpData(this.props.location.latitude, this.props.location.longitude);
    }
    console.log(this.state.yelpData);
    return (
      <React.Fragment>
        <section className="yelp-container">
        <h3>Results from Yelp API</h3>
        <ul className="yelp-results">{this.state.yelpData.map((item,i) => {
          console.log(item);
          <li key={i}>
            <a href={item.url}>{item.name}</a>
            <p>The average rating is ${item.rating} out of 5 and the average cost is ${item.price} out of 4</p>
            <img src={item.image_url}/>
          </li>
        })
      }</ul>
      </section>
      </React.Fragment>
    );
  }
}

export default Yelp;