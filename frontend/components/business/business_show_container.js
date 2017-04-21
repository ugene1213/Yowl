import { connect } from 'react-redux';
import BusinessShow from './business_show';
import { requestBusinesses } from '../../actions/business_actions';


const mapStateToProps = ({ businesses } , ownProps) => {

    const businessId = ownProps.params.id;

    return {
        businesses,
        businessId
    };

};


const mapDispatchToProps = (dispatch) => ({

    requestBusinesses: (id) => dispatch(requestBusinesses())

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BusinessShow);
