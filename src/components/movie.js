import React from 'react';

class Movies extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      location: ''
    }
  };
  render() {
    return (
     <>
        <section class="movie-container">
        <h3>Results from The Movie DB API</h3>
        <ul class="movies-results"></ul>
      </section>
     </>
    );
  }
}

export default Movies;