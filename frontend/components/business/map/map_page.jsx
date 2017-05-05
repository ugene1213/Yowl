import React from 'react';


class MapPage extends React.Component{

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

  render() {

    return (
      <div className='map-container' ref='map'></div>
    )
  }
}

export default MapPage;
