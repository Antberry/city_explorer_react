import React from 'react';
import superagent from 'superagent';

class Movies extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      movieData: []
    }
  };

  receiveMovieData = async (loc) => {
    let movieStuff = await superagent.get(`https://mysterious-river-14511.herokuapp.com/movies/`).query({data: loc});

    let movieData = movieStuff.body;
    this.setState({movieData});
    // console.log(this.state.movieData);
  }

  componentDidMount(){ // this will only be called on intial render
    if(this.props.location){
      this.receiveMovieData(this.props.location);
    }
  }

  // console.log(location);
  componentDidUpdate(previousProps){ // this
    console.log('location in update', this.props.location);
    if(this.props.location !== previousProps.location){
      this.receiveMovieData(this.props.location);
    }
  }

  render() {
    return (
     <>
        <section className="movie-container">
        <h3>Results from The Movie DB API</h3>
        <ul className="movies-results">{this.state.movieData.map((item,i) => {
              return (<li>
              <p><span>{ item.title }</span> was relased on {item.released_on }. Out of {item.total_votes } total votes, {item.title} has an average vote of { item.average_votes } and a popularity score of { item.popularity }.</p>
              <img src={ item.image_url }/>
              <p>{ item.overview }</p>
            </li>)
        })
        }</ul>
      </section>
     </>
    );
  }
}

export default Movies;