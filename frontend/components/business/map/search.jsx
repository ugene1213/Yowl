import React from 'react';
import BusinessMap from './business_map.jsx';
import BusinessIndex from '../business_index';
import { toArray } from '../../../reducers/selectors';
import SearchField from './search_field';
import GreetingContainer from '../../greeting/greeting_container';


class Search extends React.Component {

  constructor(props) {
    super(props);

  }

  componentDidMount() {
    if (!Object.keys(this.props.businesses).length) {
      this.props.requestBusinesses();
    }
  }

  // <BusinessMap businesses= {businesses} />
  render () {
    const businesses = toArray(this.props.businesses);

    const num = Math.floor((Math.random() * 1) + 3 );
    return (
      <div className="search-main">
        <div className='search-area'>
          <div className='search-content'>
            <div className="search-greeting group">
              <GreetingContainer />
            </div>
            <img src={window.yowlAssets.logo} className='search-logo'/>
            <SearchField />
          </div>
        </div>
        <BusinessIndex businesses={ this.props.businesses} requestBusinesses={this.props.requestBusinesses} />
      </div>
    );

  }
}

export default Search;
