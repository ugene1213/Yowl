import { connect } from 'react-redux';
import ReviewForm from './review_form';
import { requestBusiness, createReview } from '../../actions/business_actions';


const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps.params;
  const business = state.businesses[id];

  return {
    business,
    id
  };
};

const mapDispatchToProps = (dispatch) => {

  return {
    createReview: (review) => dispatch(createReview(review)),
    requestBusiness: (id) => dispatch(requestBusiness(id))
  };

};



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewForm);
