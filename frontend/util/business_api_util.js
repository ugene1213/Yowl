

export const fetchBusinesses = (success) => {
  debugger 
  $.ajax({

    method: 'GET',
    url: 'api/businesses',
    success,
    error: () => console.log("There was an error getting businesses")
  });


};

export const fetchBusiness = (id, success) => {
  $.ajax({
    method: "GET",
    url: `api/businesses/${id}`,
    success,
    error: () => console.log("There was an error getting this business")
  });
};


export const createReview = (success, review ) => {

  $.ajax({
    method: "POST",
    url: 'api/reviews',
    data: review,
    success,
    error: () => console.log("There was a problem processing your review")
  });
};
