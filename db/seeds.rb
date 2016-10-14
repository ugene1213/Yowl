# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


Business.delete_all
User.delete_all
Review.delete_all

wah_fung = Business.create!(
  name: "Wah Fung",
  description: "This place has the best char siu",
  lat: "40.7173",
  lng: "-73.9946",
  address: "79 Chrystie St, New York, NY 10002",
  picture: "wahFung"
)

Business.create!(
  name: "Cha Chan",
  description: "This place has the best cantonese food",
  lat: "40.715300",
  lng: "-73.998956",
  address: "45 Mott St, New York, NY 10013",
  picture: "chaChan"
)

Business.create!(
  name: "Lali",
  description: "This place has the best dominican food",
  lat: "40.761286",
  lng: "-73.993936",
  address: "630 10th Ave, New York, NY 10036",
  picture: "lali"
)
Business.create!(
  name: "Mcdonald's",
  description:"Just another Mcdonald's",
  lat: "40.738373",
  lng: "-73.883042",
  address: "80-03 Queens Blvd, New York, NY 11373",
  picture: "mcdonalds"
)

Business.create!(
  name: "White Bear",
  description: "This place has bomb wontons",
  lat: "40.758859",
  lng: "-73.831681",
  address: "135-02 Roosevelt Ave, Flushing, NY 11354",
  picture: "whiteBear"
)

Business.create!(
  name: "Shake Shack",
  description: "blah blah blah just another restaurant",
  lat: "40.743747",
  lng: "-73.610637",
  address: " 860 Old Country Rd, Garden City, NY 11530",
  picture: "shakeShack"
)

generic = User.create!(username: "generic",password: "genericpassword")

jerry = User.create!(username: "jerry",password: "genericpassword")


wilson = User.create!(username: "wilson",password: "genericpassword")


Review.create!(
rating: 1,
body: "This place is ok",
business: wah_fung,
user: generic
)

Review.create!(
rating: 1,
body: "this place is bad",
business: wah_fung,
user: jerry
)

Review.create!(
  rating: 1,
  body: "This place is terrible",
  business: wah_fung,
  user: wilson
)
