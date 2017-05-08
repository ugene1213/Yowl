json.extract! business, :id, :description, :name, :picture,
:average_rating, :address


json.reviews do
  json.partial! 'api/reviews/review', collection: business.reviews, as: :review
end
