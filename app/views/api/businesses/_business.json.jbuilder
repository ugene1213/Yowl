json.extract! business, :id, :description, :name, :address, :lng, :lat, :picture, :average_rating

json.reviews do
  json.partial! 'api/reviews/review', collection: business.reviews, as: :review
end
