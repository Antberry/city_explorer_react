import React from 'react';
import superagent from 'superagent';

class Movies extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      movieData: []
    }
  };

  receiveMovieData = async (latitude, longitude) => {
    let movieStuff = await superagent.get(`https://city-explorer-backend.herokuapp.com/movies/`).query({data: {'latitude': latitude, 'longitude': longitude}});

    let movieData = movieStuff.body;
    this.setState({movieData});
    // console.log(this.state.movieData);
  }

  render() {
    if(this.props.location.latitude && this.props.location.longitude){
      this.receiveMovieData(this.props.location.latitude, this.props.location.longitude);
    }
    return (
     <>
        <section className="movie-container">
        <h3>Results from The Movie DB API</h3>
        <ul className="movies-results">{this.state.movieData.map((item,i) => <li key={i}>{item}</li>)
        }</ul>
      </section>
     </>
    );
  }
}

export default Movies;