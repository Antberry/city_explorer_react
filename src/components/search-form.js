import React from 'react';
import superagent from 'superagent';

class SearchForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {location: ''}
  }

  handleChange = e =>{
    let location = e.target.value;
    this.setState({location});
  };

  handleSubmit = async e => {
    e.preventDefault();
    let url = `https://city-explorer-backend.herokuapp.com/location?data=${this.state.location}`;
    // console.log(url);
    let data = await superagent.get(url);
    // console.log(data.body);
    this.props.updateLocation(data.body);

  };

  render() {
    return (
      <form>
        <input type='text' onChange = {this.handleChange}/>
        <button onClick= {this.handleSubmit}> Submit </button>
      </form>
    );
  }
};

export default SearchForm;