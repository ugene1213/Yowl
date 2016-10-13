#Yowl

Squeal is a full-stack web application that is based on Yelp. This application
uses Ruby on Rails on the backend, Postgresql database, and React.js with a
Redux architectural framework on the frontend.

##Features & Implementation

###Single-Page App

Squeal will be a single static page application. The root page of the application will determine who the current user by listening to a `SessionStore` and in turn
display and hide certain information based on who the current user is and render the `currentUser`'s reviews and ratings.

###Reviews and ratings for restaurants

I used a database to keep track of each review/rating, usersTh, and restaurants. The review/rating will keep track of the `user_id` and the restaurant `restaurant_id` and will
also have a `content column`. When a user logs in to the website, there will be an API call to the database that joins the user table and the restaurant table to the
review/rating table. The design of the reviews/ratings will be implemented in a manner that is similar in design to Yelp, with slight modifications in style.

###Map Feature

Note only will users will be able to locate restaurants and see reviews and ratings associated with them, they will able to locate the restaurant via google maps. This will be
done by connecting the google map api.


##Extra Features to be implemented

Apart from the main features that I plan to implement, I also plan to implement the following features if time permits

###Markinh reviews as funny, cool, useful

Apart from just writing reviews, I plan to add a feature wherein I would be able to mark a review as funny, cool, useful, similar in implementation and style to Yelp.

###Profile

I want to create a profile page for users where their reviews are displayed with personal information and a profile picture displayed

###Friends

I may implement a friending feature, where users can friend each other and see each other's profiles. I may also implement in which friends can recommend restaurants to friends.
