import React from 'react';
import Weather from './weather';
import Movies from './movie';
import Events from './events';
import Yelp from './yelp';
import Trails from './trails';

class Result extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Weather/>
        <Movies/>
        <Events/>
        <Yelp/>
        <Trails/>
      </React.Fragment>
    );
  }
};

export default Result;