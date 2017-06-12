import BusinessItem from '../components/business/business_item';
import { starRating } from './business_api_util';
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
    this.checkDistance = this.checkDistance.bind(this);
  }

  updateMarkers(businesses) {
    if (typeof businesses === 'undefined') {
      this.businesses = this.businesses;
    } else {
      this.businesses = businesses;
    }
    this._businessesToAdd().forEach(this._createMarkerFromBusiness);
    if (Object.keys(this.savedLocations).length > 0) {
      this._businessesToDelete().forEach(this.deleteMarker);
    }

  }

  _businessesToAdd() {
    if (Object.keys(this.businesses)) {
      const currentBusinesses = Object.keys(this.markers);
      return Object.keys(this.businesses).filter( businessId => !currentBusinesses.includes(businessId));
    }
  }

  _businessesToDelete() {
    const currentBusinesses = Object.keys(this.markers);
    const chunky = this;
    return Object.keys(this.businesses).filter( (businessId) => {
      const distance = google.maps.geometry.spherical.computeDistanceBetween(chunky.map.getCenter(),
      chunky.savedLocations[businessId]);
      return distance > 600;
    });
  }

  _createMarkerFromBusiness( businessId ) {
    if (!this.savedLocations[businessId]) {
      this.getPos(this.businesses[businessId]);
    } else {
      this.checkDistance(businessId);
      this.actuallyCreateMarker(this,this.savedLocations[businessId], businessId);
    }
  }

  checkDistance(businessId) {
    const distance = google.maps.geometry.spherical.computeDistanceBetween(this.map.getCenter(),
    this.savedLocations[businessId]);
    return distance <= 1500;
  }

  getPos(business) {
      this.geocoder.geocode({
        address: business.address
      }, (result, status) => {

        if (status == 'OK') {
          this.savedLocations[business.id] = result[0].geometry.location;
          if (this.checkDistance(business.id)) {
            this.actuallyCreateMarker(result[0].geometry.location, business.id);
          }
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
    const business = this.businesses[businessId];
    const infoWindow = new google.maps.InfoWindow({
      content:
          '<div class="infoWindow">' +
          '<div class="marker-main">' +
          '<img src="' + window.yowlAssets[business.picture] + '"' + 'class="business-photo"/>' +
          '<div class="marker-info">' +
          '<h4 class="business-header">' + '<button class="business-link">' + business.name + "</button>" +
        "</h4>" + '<div class="star-' + starRating(business.average_rating) + '">' + "</div>" +
          '<div class="business-show-address">' + business.address + "</div>" +
          '</div>' +
          '</div>' +
          '<p class="business-description">' +
            business.description +
          '</p>' +
          '</div>'
    });
    marker.addListener('mouseover', () => {
      infoWindow.open(this.map, marker);
    });
    marker.addListener('mouseout', () => {
      infoWindow.close();
    });
    this.markers[businessId] = marker;

  }

  deleteMarker(businessId) {
    const marker = this.markers[businessId];

    marker.setMap(null);
  }

}
