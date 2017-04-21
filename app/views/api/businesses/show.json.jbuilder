json.partial! 'api/businesses/business', business: @business
json.extract! @business :address, :lng, :lat, :picture, :average_rating
