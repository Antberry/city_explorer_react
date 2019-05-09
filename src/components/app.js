import React from 'react';
import Header from './header';
import SearchResults from './search-results';
import SearchForm from './search-form';
import Map from './map';



  class App extends React.Component {
    render() {
      return (
        <React.Fragment>
          <Header />
          <SearchForm/>
          <Map/>
          <SearchResults />
        </React.Fragment>
      );
    }
  };

export default App;
