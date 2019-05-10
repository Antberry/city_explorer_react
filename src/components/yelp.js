import React from 'react';
import superagent from 'superagent';

class Yelp extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      yelpData: []
    };
  }

  receiveYelpData = async (loc) => {
    let yelpStuff = await superagent.get(`https://mysterious-river-14511.herokuapp.com/yelp/`).query({data: loc});

    let yelpData = yelpStuff.body;
    this.setState({yelpData});
 
  }
  componentDidMount(){ // this will only be called on intial render
    if(this.props.location){
      this.receiveYelpData(this.props.location);
    }
  }

  // console.log(location);
  componentDidUpdate(previousProps){ // this
    console.log('location in update', this.props.location);
    if(this.props.location !== previousProps.location){
      this.receiveYelpData(this.props.location);
    }
  }

  render() {
  

    return (
      <React.Fragment>
        <section className="yelp-container">
        <h3>Results from Yelp API</h3>
        <ul className="yelp-results">{this.state.yelpData.map((item,i) => {
          // console.log(item);
          return (<li key={i}>
            <a href={item.url}>{item.name}</a>
            <p>The average rating is ${item.rating} out of 5 and the average cost is ${item.price} out of 4</p>
            <img src={item.image_url}/>
          </li>)
        })
      }</ul>
      </section>
      </React.Fragment>
    );
  }
}

export default Yelp;