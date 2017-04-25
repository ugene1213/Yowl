json.extract! business, :id, :description, :name, :picture


json.reviews do
  json.partial! 'api/reviews/review', collection: business.reviews, as: :review
end
