import React from 'react';
import BusinessItem from './business_item';
import { toArray } from '../../reducers/selectors';

export default class BusinessIndex extends React.Component {

  getClass() {
    const { location } = this.props;
    if (location.pathname === '/') {
      return 'business-lists-container-2';
    } else {
      return 'business-lists-container';
    }
  }

  render() {

    let counter = 1;
    let businesses = toArray(this.props.businesses);
    let businessList = businesses.map( (business) => {
      return (<BusinessItem business={ business } key={ business.id } counter={ counter++ } />);
    }
  );
    return(
      <div className="business-index group">
        <ul className={ this.getClass() }>
          {businessList}
        </ul>
      </div>
    )

  }

}
