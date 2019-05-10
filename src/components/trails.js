import React from 'react';
import superagent from 'superagent';

class Trails extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      trailsData: []
    }
  }

  receiveTrailsData = async (loc) => {
    let trailsStuff = await superagent.get(`https://mysterious-river-14511.herokuapp.com/trails/`).query({data: loc});

    let trailsData = trailsStuff.body;
    this.setState({trailsData});
    // console.log(this.state.trailsData);
  }

  componentDidMount(){ // this will only be called on intial render
    if(this.props.location){
      this.receiveTrailsData(this.props.location);
    }
  }

  // console.log(location);
  componentDidUpdate(previousProps){ // this
    console.log('location in update', this.props.location);
    if(this.props.location !== previousProps.location){
      this.receiveTrailsData(this.props.location);
    }
  }
  
  render() {
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