import { connect } from 'react-redux';
import Search from './search';
import { requestBusinesses, requestBusiness } from '../../../actions/business_actions';


const mapStateToProps = ({ businesses }) => ({
  businesses
}
);
const mapDispatchToProps = (dispatch) => ({

  requestBusinesses: () => dispatch(requestBusinesses()),
  requestBusiness: (id) => dispatch(requestBusiness(id))

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
