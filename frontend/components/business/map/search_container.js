import { connect } from 'react-redux';
import Search from './search';
import { requestBusinesses, requestBusiness } from '../../../actions/business_actions';

const mapStateToProps = ( state ) => {
  const biz = state.businesses; 
  return {
    businesses : biz
  };
};

const mapDispatchToProps = (dispatch) => ({

  requestBusinesses: () => dispatch(requestBusinesses()),
  requestBusiness: (id) => dispatch(requestBusiness(id))

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
