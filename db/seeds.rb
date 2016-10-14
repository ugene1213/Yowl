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

Business.create!(
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

User.create!(
  username: "generic",
  password: "genericpassword"
)
