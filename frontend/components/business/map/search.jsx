import React from 'react';
import BusinessMap from './business_map.jsx';
import BusinessIndex from '../business_index';
import { toArray } from '../../../reducers/selectors';


class Search extends React.Component {

  ComponentDidMount() {
    this.props.requestBusinesses();
  }

  render () {

    if ( typeof this.props.businesses === "undefined") {
      return (<div></div>);
    } else {
      return (
        <div className="search-main">
          <BusinessMap businesses= {toArray(this.props.businesses)}/>
          <BusinessIndex
            requestBusinesses= {this.props.requestBusinesses}
            businesses= {this.props.businesses}
            />
        </div>
      );
    }
  }

}

export default Search;
