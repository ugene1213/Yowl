


export default class MarkerManager {
  constructor(map, geocoder) {
    this.map = map;
    this.geocoder = geocoder;
    this.markers = {};
    this.savedLocations = {};
    // this.handleClick = handleClick;
    this._createMarkerFromBusiness = this._createMarkerFromBusiness.bind(this);
    this._businessesToAdd = this._businessesToAdd.bind(this);
    this.updateMarkers = this.updateMarkers.bind(this);
    this.getPos = this.getPos.bind(this);
    this.actuallyCreateMarker = this.actuallyCreateMarker;
  }

  updateMarkers(businesses) {
    if (typeof businesses === 'undefined') {
      this.businesses = this.businesses;
    } else {
      this.businesses = businesses;
    }
    this._businessesToAdd().forEach(this._createMarkerFromBusiness);
  }

  _businessesToAdd() {
    debugger
    if (Object.keys(this.businesses)) {
      debugger
      const currentBusinesses = Object.keys(this.markers);
      return Object.keys(this.businesses).filter( businessId => !currentBusinesses.includes(businessId));
    }
  }

  _createMarkerFromBusiness( businessId ) {
    if (!this.savedLocations[businessId]) {
      this.getPos(this.businesses[businessId]);
    } else {
      this.actuallyCreateMarker(this.savedLocations[businessId], businessId);
    }
  }

  getPos(business) {
      this.geocoder.geocode({
        address: business.address
      }, (result, status) => {

        if (status == 'OK') {
          this.savedLocations[business.id] = result[0].geometry.location;
          this.actuallyCreateMarker(result[0].geometry.location, business.id);
        } else {
          alert('Geocode not successful: ' + status);
        }
      });
  }

  actuallyCreateMarker(address,businessId) {
    const pos = address;
    const marker = new google.maps.Marker({
      position: pos,
      map: this.map,
      businessId
    });
    // marker.addListener('click', () => this.handleClick(business));
    this.markers[businessId] = marker;
  }

}
