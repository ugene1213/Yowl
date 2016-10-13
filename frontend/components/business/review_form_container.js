import { connect } from 'react-redux';
import ReviewForm from './review_form';
import { requestBusinesses, createReview } from '../../actions/business_actions';


const mapStateToProps = ({ businesses },ownProps) => {

  const business = businesses[parseInt(ownProps.params.id)] || {
    name: "", address: "", reviews: []
  };

  return {
    business
  };
};

const mapDispatchToProps = (dispatch) => {

  return {
    createReview: (review) => dispatch(createReview(review)),
    requestBusinesses: () => dispatch(requestBusinesses())
  };

};



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewForm);
