import React from 'react';
import BusinessItem from './business_item';
import { toArray } from '../../reducers/selectors';

export default class BusinessIndex extends React.Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //   };
  // }

  componentDidMount() {

    this.props.requestBusinesses();

  }

  render() {

    let counter = 1;
    const businessList = toArray(this.props.businesses).map( (business) => (
      <BusinessItem business={ business } key={ business.address } counter={ counter++ } />
  ));

    return(
        <div className="business-index group">
          <br/>
          <h1 className="business-index-header">Businesses</h1>
          <ul>
            { businessList }
          </ul>
        </div>

    );

  }

}
