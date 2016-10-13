export const REQUEST_BUSINESSES = "REQUEST_BUSINESSES";
export const RECEIVE_BUSINESSES = "RECEIVE_BUSINESSES";
export const REQUEST_BUSINESS = "REQUEST_BUSINESS";
export const RECEIVE_BUSINESS = "RECEIVE_BUSINESS";
export const CREATE_REVIEW = "CREATE_REVIEW";


export const receiveBusinesses = (businesses) => ({

    type: RECEIVE_BUSINESSES,
    businesses
});

export const requestBusinesses = () => ({

  type: REQUEST_BUSINESSES

});
export const receiveBusiness = (business) => ({

    type: RECEIVE_BUSINESS,
    business
});

export const requestBusiness = (id) => ({

  type: REQUEST_BUSINESS,
  id
});


export const createReview = (review) => ({
  type: CREATE_REVIEW,
  review
});
