import React from 'react';
import Header from './header';
import SearchResults from './search-results';
import SearchForm from './search-form';
import Map from './map';



  class App extends React.Component {
    constructor(props){
      super(props);

      this.state = {
        search_query: '',
        formatted_query: '',
        latitude: null,
        longitude: null
      }
    }

    updateLocation = (data) => {
      console.log(data);
      this.setState({
        search_query: data.search_query,
        formatted_query: data.formatted_query,
        latitude: data.latitude,
        longitude: data.longitude

      });
    };

    render() {
      return (
        <React.Fragment>
          <Header />
          <p>{this.state.formatted_query}</p>
          <SearchForm updateLocation = {this.updateLocation}/>
          <Map 
            latitude = {this.state.latitude} 
            longitude={this.state.longitude}
          />
          <SearchResults />
        </React.Fragment>
      );
    }
  };

export default App;
