import React from 'react';

  class Header extends React.Component {
    render() {
      return (
        <div>
          <header>City Explorer</header>
          <p>Enter a location below to learn about the weather, events, restaurants, movies, and more!</p>
        </div>
      );
    }
  }

  class Search extends React.Component {
    render() {
      return (
        <div>
        <input />
        <button> Submit </button>
        </div>
      );
    }
  };

  class Map extends React.Component {
    render() {
      return (
        <div>
          <img src="https://via.placeholder.com/150"/>
        </div>
      );
    }
  };

  class Results extends React.Component {
    render() {
      return (
        <div>
          <section>
            <h3>Weather</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna porttitor rhoncus dolor purus non enim. Tristique nulla aliquet enim tortor at. Elit pellentesque habitant morbi tristique. Lorem ipsum dolor sit amet consectetur.</p>
          </section>
          <section>
            <h3>Movies</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna porttitor rhoncus dolor purus non enim. Tristique nulla aliquet enim tortor at. Elit pellentesque habitant morbi tristique. Lorem ipsum dolor sit amet consectetur.</p>
          </section>
          <section>
            <h3>Yelp</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna porttitor rhoncus dolor purus non enim. Tristique nulla aliquet enim tortor at. Elit pellentesque habitant morbi tristique. Lorem ipsum dolor sit amet consectetur.</p>
          </section>
          <section>
            <h3>Events</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna porttitor rhoncus dolor purus non enim. Tristique nulla aliquet enim tortor at. Elit pellentesque habitant morbi tristique. Lorem ipsum dolor sit amet consectetur.</p>
          </section>
          <section>
            <h3>Trails</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna porttitor rhoncus dolor purus non enim. Tristique nulla aliquet enim tortor at. Elit pellentesque habitant morbi tristique. Lorem ipsum dolor sit amet consectetur.</p>
          </section>
        </div>
      );
    }
  };

  class Main extends React.Component {
    render() {
      return (
        <React.Fragment>
          <Search />
          <Map />
          <Results />
        </React.Fragment>
      );
    }
  };

  class App extends React.Component {
    render() {
      return (
        <React.Fragment>
          <Header />
          <Main />
        </React.Fragment>
      );
    }
  };

export default App;
