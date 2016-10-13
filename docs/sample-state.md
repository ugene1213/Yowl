
{
  currentUser: {
    id: 1,
    username: "ugene1213",
  },
  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
    createReview: {errors: ["body can't be blank"]}
  },
  reviews: {
    1: {
      author_id: 1,
      rating: 4,
      body: "This place has really bad food",
      business_id: 3,
    }
  },
  business: {
    id: 3,
    name: "Joe's Pizza",
    address: "450 Bryan drive, New York, NY 17854",
    description: "Founded in 1930, Joe's is one of the best pizza places"
    lat: 0.0,
    lng: 0.0,
  }
}
```
