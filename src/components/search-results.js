import React from 'react';
import Result from './result';

class SearchResults extends React.Component {
  render() {
    return (
      <>
      <Result location = {this.state.location}/>
      </>
    );
  }
};

export default SearchResults;