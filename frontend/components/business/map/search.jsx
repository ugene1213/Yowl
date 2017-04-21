import React from 'react';
import BusinessMap from './business_map.jsx';
import BusinessIndex from '../business_index';
import { toArray } from '../../../reducers/selectors';


class Search extends React.Component {

  constructor(props) {
    super(props);

  }

  componentDidMount() {
    debugger
    if (!Object.keys(this.props.businesses).length) {
      this.props.requestBusinesses();
    }
  }

  render () {
    const businesses = toArray(this.props.businesses);

    return (
      <div className="search-main">
        <BusinessMap businesses= {businesses} />
        <BusinessIndex businesses={ this.props.businesses} requestBusinesses={this.props.requestBusinesses} />
      </div>
    );

  }
}

export default Search;
