import React from 'react';
import { Link } from 'react-router';
import ReviewShow from './review_show';
import ReviewButton from './review_button';
import { starRating } from '../../util/business_api_util';


class BusinessShow extends React.Component {

  componentDidMount() {
    if (Object.keys(this.props.businesses).length === 0) {
      this.props.requestBusinesses();
    }
    window.scrollTo(0,0);
    // window.addEventListener('DOMContentLoaded',
    // this.googleMap.bind(this));
    if(this.refs.map) {
      this.googleMap();
    }


  }
  componentDidUpdate() {
    if (this.refs.map) {
      this.googleMap();
    }
    console.log('my name is');
  }

  googleMap() {
    const business = this.props.businesses[this.props.businessId];
    this.geocoder = new google.maps.Geocoder();
    const mapDomNode = this.refs.map;
    const mapOptions = {
      center: {lat: 40.7831, lng: 73.9712},
      zoom: 20,
      zoomControl: true,
      streetViewControl:false,

    };
    this.map = new google.maps.Map(mapDomNode, mapOptions);
    if (typeof this.location === 'undefined') {
      this.geocoder.geocode({ address: business.address },
        (result, status) => {

          if (status == 'OK') {
            this.location = result[0].geometry.location;
            this.map.setCenter(result[0].geometry.location);
            this.marker = new google.maps.Marker({
              map: this.map,
              position: result[0].geometry.location
             });
          } else {
            alert('Geocode not successful: ' + status);
          }
        });
    } else {

      this.map.setCenter(this.location);
      this.marker = new google.maps.Marker({
        map: this.map,
        position: this.location
       });
    }

  }

  render() {

    if (Object.keys(this.props.businesses).length === 0) {
      return <div>Loading.....</div>
    }
    else {
      const business = this.props.businesses[this.props.businessId];
      const businessId = this.props.businessId;
      return (
        <div className="Business-show-page">
          <br/>
          <div className="business-show-header group">
            <div className="business-name-pic">
              <h1 className="business-show-name">{ business.name }</h1>
              <div className='counter-rating-review-container'>
                <div className="business-show-counter-rating">
                  <div className={`star-${starRating(business.average_rating)}`}>
                  </div>
                  <div className="business-show-num-reviews">{ business.reviews.length } reviews</div>
                </div>
                <div className="business-show-review-button"><ReviewButton id={businessId} business={business}/></div>
              </div>

              <div className='business-pics-container'>
                <div className='business-map-info'>
                  <div className='business-map-container'>
                    <div className='business-show-map' id='the-map' ref='map'>
                    </div>
                  </div>

                  <div className='business-map-address'>
                    {business.address}
                  </div>
                </div>
                <img src= {window.yowlAssets[business.picture]} className="business-show-pic" />
              </div>
            </div>
            <br/>

          </div>



          <div className="business-show-reviews">

            <h2 className="reviews-header">Recommended Reviews <b>for { business.name }</b></h2>

            <ReviewShow business= { business } num={10} />
          </div>
        </div>
      );
    }

  }

}


export default BusinessShow;
