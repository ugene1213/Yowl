

export const fetchBusinesses = (success) => {
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


export const createReview = (review ) => (
  $.ajax({
    method: "POST",
    url: 'api/reviews',
    data: review,
  }));

export const starRating = (review) => {
    const thing = parseInt(review);

    if (thing === 1) {
      return "one";
    }
    else if (thing === 2) {
      return "two";
    }
    else if (thing === 3) {
      return "three";
    }
    else if(thing === 4) {
      return "four";
    }
    else if (thing === 5) {
      return "five";
    } else {
      return "zero";
    }
};
