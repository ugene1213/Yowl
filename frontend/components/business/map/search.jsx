import React from 'react';
import BusinessMap from './business_map.jsx';
import BusinessIndexContainer from '../business_index_container';
import { toArray } from '../../../reducers/selectors';


class Search extends React.Component {

  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.requestBusinesses();
  }

  render () {
    const businesses = toArray(this.props.businesses);

    return (
      <div className="search-main">
        <BusinessMap businesses= {businesses} />
        <BusinessIndexContainer />
      </div>
    );

  }
}

export default Search;
