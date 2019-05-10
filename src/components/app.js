import React from 'react';
import Header from './header';
import SearchResults from './search-results';
import SearchForm from './search-form';
import Map from './map';



  class App extends React.Component {
    constructor(props){
      super(props);

      this.state = {
        location: {
          search_query: '',
          formatted_query: '',
          latitude: null,
          longitude: null
        }
      }
    }

    updateLocation = (data) => {
      console.log(data);
      this.setState({
        location: {
          search_query: data.search_query,
          formatted_query: data.formatted_query,
          latitude: data.latitude,
          longitude: data.longitude
        }
      });
    };

    render() {
      return (
        <React.Fragment>
          <Header />
          <p>{this.state.formatted_query}</p>
          <SearchForm updateLocation = {this.updateLocation}/>
          <Map location = {this.state.location}/>
          <SearchResults location = {this.state.location}/>
        </React.Fragment>
      );
    }
  };

export default App;
