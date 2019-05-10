import React from 'react';
import Weather from './weather';
import Movies from './movie';
import Events from './events';
import Yelp from './yelp';
import Trails from './trails';

class Result extends React.Component {
  constructor(props){
    super(props);

  }
  render() {
    return (
      <React.Fragment>
        <Weather location= {this.props.location}/>
        <Movies location= {this.props.location}/>
        <Events location= {this.props.location}/>
        <Yelp location= {this.props.location}/>
        <Trails location= {this.props.location}/>
      </React.Fragment>
    );
  }
};

export default Result;