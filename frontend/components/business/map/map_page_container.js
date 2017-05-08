import { connect } from 'react-redux';
import MapPage from './map_page';
import { requestBusinesses } from '../../../actions/business_actions';


const mapStateToProps = ({ businesses }) => ({
  businesses
});


const mapDispatchToProps = (dispatch) => ({
  requestBusinesses: () => dispatch(requestBusinesses())
})


export default connect(mapStateToProps, mapDispatchToProps)(
  MapPage
)
