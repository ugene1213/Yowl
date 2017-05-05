import React from 'react';


class MapPage extends React.Component {

  constructor(props) {
    super(props);
    this.setLocation = this.setLocation.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    this.setLocation(nextProps.location.query.location);
  }

  setLocation(address) {

    this.geocoder.geocode({ address },
      (result, status) => {

        if (status == 'OK') {
          this.map.setCenter(result[0].geometry.location);
          const marker = new google.maps.Marker({
            map: this.map,
            position: result[0].geometry.location
          });
        } else {
          alert('Geocode not successful: ' + status);
        }
      });

  }

  componentDidMount() {
    const mapDOMNode = this.refs.map;

    const mapOptions = {
      center: {lat: 40.7831, lng: -73.9712},
      zoom: 13
    };
    this.geocoder = new google.maps.Geocoder();
    this.map = new google.maps.Map(mapDOMNode, mapOptions);
    this.setLocation(this.props.location.query.location);

  }

  render() {
    return (
      <div className='map-container' ref='map'></div>
    )
  }
}

export default MapPage;
