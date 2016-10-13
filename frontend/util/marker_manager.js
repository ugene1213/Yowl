


export default class MarkerManager {
  constructor(map, handleClick) {
    this.map = map;
    this.markers = [];
    this.handleClick = handleClick;
    this._createMarkerFromBusiness = this._createMarkerFromBusiness.bind(this);
    this._businessesToAdd = this._businessesToAdd.bind(this);
    this.updateMarkers = this.updateMarkers.bind(this);
  }

  updateMarkers(businesses) {
    this.businesses = businesses;
    console.log('time to update');
    this._businessesToAdd().forEach(this._createMarkerFromBusiness);
  }

  _businessesToAdd() {
    const currentBusinesses = this.markers.map( marker => marker.benchId );
    return this.businesses.filter( business => !currentBusinesses.includes(business.id));
  }

  _createMarkerFromBusiness( business ) {
    const pos = new google.maps.LatLng(parseFloat(business.lat), parseFloat(business.lng));
    const marker = new google.maps.Marker({
      position: pos,
      map: this.map,
      businessId: business.id
    });
    marker.addListener('click', () => this.handleClick(business));
    this.markers.push(marker);
  }


}
