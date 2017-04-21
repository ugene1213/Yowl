json.extract! business, :id, :description, :name


json.reviews do
  json.partial! 'api/reviews/review', collection: business.reviews, as: :review
end
