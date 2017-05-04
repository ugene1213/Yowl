import React from 'react';


class SearchField extends React.Component {

  componentDidMount() {

    const defaultBounds = new google.maps.LatLngBounds(
      new google.maps.LatLng(-33.8902, 151.1759),
      new google.maps.LatLng(-33.8474, 151.2631));

      const input = document.getElementById('searchTextField');
      const options = {
        componentRestrictions: {country: 'us'},
        types: ['(cities)']
      };

      const autocomplete = new google.maps.places.Autocomplete(input, options);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('success');
  }

  render() {
    return (

      <form className='search-bar' onSubmit={ this.handleSubmit }>
        <label>Near</label>
        <input type='text' className='search' id="searchTextField" placeholder="New York, NY"></input>
        <input type='submit' className='search-submit' value="Go"/>
      </form>

    );
  }
}


export default SearchField;
