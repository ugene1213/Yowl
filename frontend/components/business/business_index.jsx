import React from 'react';
import BusinessItem from './business_item';
import { toArray } from '../../reducers/selectors';

export default class BusinessIndex extends React.Component {

  render() {

        let counter = 1;
        const businesses = toArray(this.props.businesses);
        let businessList = businesses.map( (business) => {
          return (<BusinessItem business={ business } key={ business.id } counter={ counter++ } />);
        }
      );
      return(
        <div className="business-index group">
          <ul className='business-lists-container'>
            {businessList}
          </ul>
        </div>
      )

  }

}
