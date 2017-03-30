# Yowl

[Heroku link][heroku]

[heroku]: https://yowler.herokuapp.com/

## Minimum Viable Product

Yowl is a web application that is based on Yelp and built with Ruby on Rails and React/Redux. By the end of week 9, this app will be at the very least satisfy the following
criteria with smooth, bug-free navigation, adequate seed data and sufficient CSS styling:

- [ ] Hosting on Heroku
- [ ] Creating an account, login, and guest login
- [ ] Rating/Reviews
- [ ] Business pages for restaurants
- [ ] Google maps displaying where certain restaurants are in
- [ ] Rich Text Editing

## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Redux Structure][redux-structure]
* [Sample State][sample-state]

[wireframes]: docs/wireframes
[components]: docs/component-heirarchy.md
[redux-structure]: docs/redux-structure.md
[sample-state]: docs/sample-state.md
[api-endpoints]: docs/api-endpoints.md
[schema]: docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (2 days)

**Objective:** Functioning rails project with front-end Authentication

- [ ] New Rails project
- [ ] `User` model/migration
- [ ] Back end authentication (session/password)
- [ ] `StaticPages` controller and root view
- [ ] Webpack & react/redux modules
- [ ] `APIUtil` to interact with the API
- [ ] Redux cycle for frontend authentication
- [ ] User signup/signin components
- [ ] Blank landing component after signup/signin
- [ ] Style signup/signin components
- [ ] Seed users
- [ ] Review phase 1

### Phase 2: Businesses Model, API, and components (2 days)

**Objective:** Business pages can be viewed and searched.

- [ ] `Business` model
- [ ] Seed database with a small amount of test data
- [ ] CRUD API for Businesses (`BusinessesController`)
- [ ] JBuilder views for businesses
- Business components and respective Redux loops
  - [ ] `BusinessIndex`
  - [ ] `BusinessIndexItem`
  - [ ] `BusinessForm`
- [ ] Seed Businesses
- [ ] Users will be able to search for businesses via a search bar

### Phase 3: Users can read and write reviews for businesses and destroy their own reviews (2 day)

**Objective:** Reviews will be associated with business pages, and they will render all the reviews along with users who wrote the reviews

- [ ] `Review` model
- [ ] Seed database with a small amount of test data
- [ ] CRUD API for reviews (`ReviewsController`)
- [ ] JBuilder views for reviews
- [ ] Adding reviews requires that a user be signed in.
- [ ] Viewing reviews associated with a business.
- [ ] Style reviews components
- [ ] Seed reviews

### Phase 4: Map (1 day)

**Objective:** Business pages will include the location mapped on google maps.

- [ ] Using the address I will be able to map the restaurant on google maps


### Bonus Features (TBD)
- [ ] Profiles
- [ ] Mark reviews as interesting, funny, cool, etc.
- [ ] Friends
