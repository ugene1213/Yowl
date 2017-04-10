# Yowl

[Live link][heroku]

[heroku]: http://yowl.eugenecheng.club

Yowl is a web application that is based on Yelp and built with Ruby on Rails on the back-end, with a PostgresQL database, and React/Redux on the front-end. Right Now, users can make an account and review a select number of restaurants, with a google map mapping their locations.

![signup](app/assets/images/signup.png)

## Features So Far

### User Log In/Sign Up

Users can create a an account and log in with account. The back end authentication for users was implemented using Ruby's BCrypt gem, which encrypts the password and having this hashed password stored in the database

![login](app/assets/images/login.png)

### Writing Reviews

When logged in, users can write reviews for restaurants in the database. Currently, users can only write reviews for pre-seeded restaurants in the database. I would like to add the ability for user's to create new businesses.

![reviews](app/assets/images/reviews.png)

## Features To Add Soon
- [ ] User Profile Page
- [ ] Mark reviews as interesting, funny, cool, etc.
- [ ] businesses page for business owners
