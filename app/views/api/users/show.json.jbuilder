json.partial! "api/users/user", user: @user



json.reviews do
  json.partial! 'api/reviews/review', collection: @user.reviews, as: :review
end
