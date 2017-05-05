import React from 'react';
import { hashHistory } from 'react-router';

class SearchField extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      location: ""
    };
    this.autocomplete = null;
    this.location = '';
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {

    const defaultBounds = new google.maps.LatLngBounds(
      new google.maps.LatLng(-33.8902, 151.1759),
      new google.maps.LatLng(-33.8474, 151.2631)
      );

      const input = document.getElementById('searchTextField');
      const options = {
        componentRestrictions: {country: 'us'},
        types: ['(cities)']
      };

      this.autocomplete = new google.maps.places.Autocomplete(input, options);
      google.maps.event.addListener(this.autocomplete, 'place_changed', () => {
        this.update();
      });
  }

  update(prop) {

    if( typeof prop === 'undefined') {
      this.location = this.autocomplete.getPlace();
    } else {
      return e => {
        this.setState({
          [prop]: e.currentTarget.value
        });
      }
    }
  }

  handleSubmit(e) {
    e.preventDefault();

  }

  render() {
    return (

      <form className='search-bar' onSubmit={ this.handleSubmit }>
        <label>Near</label>
        <input type='text' className='search' id="searchTextField" placeholder="New York, NY"
          onChange={this.update('location')}/>
        <input type='submit' className='search-submit' value="Go"/>
      </form>

    );
  }
}


export default SearchField;
