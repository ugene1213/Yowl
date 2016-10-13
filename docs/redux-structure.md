## Auth Cycles

### Session API Request Actions

* `signUp`
  0. invoked from `SignupForm` `onSubmit`
  0. `POST /api/users` is called.
  0. `receiveCurrentUser` is set as the success callback.
* `logIn`
  0. invoked from `Navbar` `onSubmit`
  0. `POST /api/session` is called.
  0. `receiveCurrentUser` is set as the callback.
* `logOut`
  0. invoked from `Navbar` `onClick`
  0. `DELETE /api/session` is called.
  0. `removeCurrentUser` is set as the success callback.
* `fetchCurrentUser`
  0. invoked from `App` in `didMount`
  0. `GET /api/session` is called.
  0. `receiveCurrentUser` is set as the success callback.

### Session API Response Actions

* `receiveCurrentUser`
  0. invoked from an API callback
  0. the `SessionReducer` stores `currentUser` in the application's state.
* `removeCurrentUser`
  0. invoked from an API callback
  0. the `SessionReducer` removes `currentUser` from the application's state.

## Error Cycles

### Error API Response Actions
* `setErrors`
  0. invoked from API callbacks on error for actions that generate POST requests
  0. the `ErrorReducer` stores the `form` in the application's state; `errors` are mapped to their respective forms
* `removeErrors`
  0. invoked from API callbacks on success for actions that generate POST requests
  0. the `ErrorReducer` removes `errors` for a given `form` in the application's state.

## Review Cycles

### Reviews API Request Actions

* `fetchAllReviewa`
  0. invoked from `ReviewsIndex` `didMount`/`willReceiveProps`
  0. `GET /api/reviews` is called.
  0. `receiveAllReviews` is set as the success callback.

* `createReview`
  0. invoked from new note button `onClick`
  0. `POST /api/reviews` is called.
  0. `receiveReview` is set as the success callback.

* `fetchSingleNote`
  0. invoked from `NoteDetail` `didMount`/`willReceiveProps`
  0. `GET /api/reviews/:id` is called.
  0. `receiveReview` is set as the success callback.


* `destroyReview`
  0. invoked from delete note button `onClick`
  0. `DELETE /api/reviews/:id` is called.
  0. `removeReview` is set as the success callback.

### Reviews API Response Actions

* `receiveAllReviews`
  0. invoked from an API callback
  0. the `ReviewReducer` updates `reviews` in the application's state.

* `removeNote`
  0. invoked from an API callback
  0. the `ReviewReducer` removes `reviews[id]` from the application's state.

## Business Cycles

### Businesses API Request Actions

* `fetchAllBusinesses`
  0. invoked from `BusinessesIndex` `didMount`/`willReceiveProps`
  0. `GET /api/businesses` is called.
  0. `receiveAllBusinesses` is set as the success callback.

* `fetchSingleBusiness`
  0. invoked from `BusinessDetail` `didMount`/`willReceiveProps`
  0. `GET /api/business/:id` is called.
  0. `receiveSingleBusiness` is set as the success callback.

* `updateBusiness`
  0. invoked from `BusinessForm` `onSubmit`
  0. `POST /api/businesses` is called.
  0. `receiveSingleBusiness` is set as the success callback.

* `destroyBusiness`
  0. invoked from delete notebook button `onClick`
  0. `DELETE /api/business/:id` is called.
  0. `removeBusiness` is set as the success callback.
!!!! I might implement this action if I have time.

### Businesses API Response Actions

* `receiveAllBusinesses`
  0. invoked from an API callback.
  0. The `Business` reducer updates `businesses` in the application's state.

* `receiveSingleNotebook`
  0. invoked from an API callback.
  0. The `Business` reducer updates `notebooks[id]` in the application's state.

* `removeNotebook`
  0. invoked from an API callback.
  0. The `Notebook` reducer removes `notebooks[id]` from the application's state.

## SearchSuggestion Cycles

* `fetchSearchSuggestions`
  0. invoked from `NoteSearchBar` `onChange` when there is text
  0. `GET /api/businesses` is called with `text` param.
  0. `receiveSearchSuggestions` is set as the success callback.

* `receiveSearchSuggestions`
  0. invoked from an API callback.
  0. The `SearchSuggestion` reducer updates `suggestions` in the application's state.

* `removeSearchSuggestions`
  0. invoked from `NoteSearchBar` `onChange` when empty
  0. The `SearchSuggestion` reducer resets `suggestions` in the application's state.
