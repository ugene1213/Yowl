import React from 'react';
import { hashHistory } from 'react-router';


class BusinessItem extends React.Component {

  constructor(props) {
    super(props)
    this._handleClick = this._handleClick.bind(this);
  }

  _handleClick() {
    hashHistory.push( "/businesses/" + this.props.business.id)
  }
  // const imageSrc = business.picture;

  // <div>
  // <img src="http://s3.amazonaws.com/findaloo-pro/loos/images/000/000/006/original/streetview?1479688791" className="business-photo"/>
  // </div>
  render() {
    const { business, counter } = this.props;
    const imageSrc = window.yowlAssets[business.picture];

    return (
        <li className="business-item group">
              <div className="business-item-info">

              <h4>
                  { counter }.<button onClick={ this._handleClick } className="business-link">{ business.name }</button>
              </h4>

              <p className="business-description">
                { business.description }
              </p>
            </div>
      </li>
    );
  }
}


export default BusinessItem;
