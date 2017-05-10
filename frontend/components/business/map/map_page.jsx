import React from 'react';
import { toArray } from '../../../reducers/selectors';
import BusinessIndex from '../business_index';
import MarkerManager from '../../../util/marker_manager';

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
    if (Object.keys(this.props.businesses).length === 0) {
      this.props.requestBusinesses();
    }
    const mapDOMNode = this.refs.map;

    const mapOptions = {
      center: {lat: 40.7831, lng: -73.9712},
      zoom: 12
    };
    this.geocoder = new google.maps.Geocoder();
    this.map = new google.maps.Map(mapDOMNode, mapOptions);
    window.map = this.map;
    window.places = this.places;
    this.setLocation(this.props.location.query.location);
    this.MarkerManager = new MarkerManager(this.map, this.geocoder);
    this.MarkerManager.updateMarkers(this.props.businesses);
    window.MarkerManafer = this.MarkerManager;
  }

  componentDidUpdate() {
    this.MarkerManager.updateMarkers(this.props.businesses);
  }

  render() {

    const businesses = toArray(this.props.businesses);

    return (

    <div className='map-page-container'>

      <div className='businesses'>
        <BusinessIndex businesses={ businesses } />
      </div>

      <div className='map-container' ref='map'></div>

    </div>
    )
  }
}

export default MapPage;
