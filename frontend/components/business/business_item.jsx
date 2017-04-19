import React from 'react';
import { hashHistory } from 'react-router';


class BusinessItem extends React.Component {

  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    hashHistory.push( "/businesses/" + this.props.business.id)
  }

  render() {

    const { business, counter } = this.props;
    return (
      <li className="business-item group">

        <img
          src={ window.yowlAssets[business.picture]}
          className="business-photo"
          />
        <div className="business-item-info">
          <h4>
            { counter }.<button onClick={ this.handleClick } className="business-link">{ business.name }</button>
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
