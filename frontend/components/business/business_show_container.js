import { connect } from 'react-redux';
import BusinessShow from './business_show';
import { requestBusiness } from '../../actions/business_actions';


const mapStateToProps = (state , ownProps) => {
  const businessId =  parseInt(ownProps.params.id);
  const business = state.businesses[businessId];

  return {
    businessId,
    business
  };
};


const mapDispatchToProps = (dispatch) => ({

    requestBusiness: (id) => dispatch(requestBusiness(id));

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BusinessShow);
