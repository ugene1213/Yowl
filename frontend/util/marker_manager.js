


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
    this.actuallyCreateMarker = this.actuallyCreateMarker.bind(this);
    this._businessesToDelete = this._businessesToDelete.bind(this);
  }

  updateMarkers(businesses) {
    if (typeof businesses === 'undefined') {
      this.businesses = this.businesses;
    } else {
      this.businesses = businesses;
    }
    this._businessesToAdd().forEach(this._createMarkerFromBusiness);
    this._businessesToDelete().forEach(this.deleteMarker);
  }

  _businessesToAdd() {
    if (Object.keys(this.businesses)) {
      const currentBusinesses = Object.keys(this.markers);
      return Object.keys(this.businesses).filter( businessId => !currentBusinesses.includes(businessId));
    }
  }

  _businessesToDelete() {
    const currentBusinesses = Object.keys(this.markers);
    return Object.keys(this.businesses).filter( (businessId) => {
      debugger
      const distance = google.maps.geometry.spherical.computeDistanceBetween(this.map.getCenter(),
      this.savedLocations[businessId]);
      return distance < 600;
    });
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

  deleteMarker(businessId) {
    const marker = this.markers[businessId];

    marker.setMap(null);
  }

}
