import { connect } from 'react-redux';
import BusinessShow from './business_show';
import { requestBusiness } from '../../actions/business_actions';


const mapStateToProps = ({ businesses } , ownProps) => {

    const businessId = ownProps.params.id;

    return {
        businesses,
        businessId
    };

};


const mapDispatchToProps = (dispatch) => ({

    requestBusiness: (id) => dispatch(requestBusiness(id))

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BusinessShow);
