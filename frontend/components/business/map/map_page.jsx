import React from 'react';


class MapPage extends React.Component {

  constructor(props) {
    super(props);
    this.setLocation = this.setLocation.bind(this);
    this.places = {};
  }
  componentWillReceiveProps(nextProps) {
      this.setLocation(nextProps.location.query.location);
  }

  setLocation(address) {
    if (this.places[address]) {
      this.map.setCenter(this.places[address]);
      console.log('yay the code worked');
    } else {

      this.geocoder.geocode({ address },
        (result, status) => {

          if (status == 'OK') {
            const address = result[0].formatted_address;
            this.places[address] = result[0].geometry.location;
            this.map.setCenter(result[0].geometry.location);
            // const marker = new google.maps.Marker({
            //   map: this.map,
            //   position: result[0].geometry.location
            // });
          } else {
            alert('Geocode not successful: ' + status);
          }
        });
    }


  }

  componentDidMount() {
    const mapDOMNode = this.refs.map;

    const mapOptions = {
      center: {lat: 40.7831, lng: -73.9712},
      zoom: 15
    };
    this.geocoder = new google.maps.Geocoder();
    this.map = new google.maps.Map(mapDOMNode, mapOptions);
    window.map = this.map;
    window.places = this.places;
    this.setLocation(this.props.location.query.location);

  }

  render() {
    return (

    <div className='map-page-container'>

      <div className='map-container' ref='map'></div>
    </div>
    )
  }
}

export default MapPage;
