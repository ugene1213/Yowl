import React from 'react';
import MarkerManager from '../../../util/marker_manager';

class BusinessMap extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const mapDOMNode = this.refs.map;

    const mapOptions = {
      center: {lat: 40.7831, lng: -73.9712},
      zoom: 13
    };
    this.map = new google.maps.Map(mapDOMNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
    this.MarkerManager.updateMarkers(this.props.businesses, this._handleMarkerClick.bind(this));

  }

  componentDidUpdate() {
    this.MarkerManager.updateMarkers(this.props.businesses);
  }

  _handleMarkerClick(bench) {
     this.props.router.push("businesses/" + bench.id );
   }

  render() {
    return (
      <div className="map-container" ref='map'></div>
    );

  }

}

export default BusinessMap;
