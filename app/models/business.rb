# == Schema Information
#
# Table name: businesses
#
#  id          :integer          not null, primary key
#  name        :string           not null
#  description :string           not null
#  lng         :string           not null
#  lat         :string           not null
#  address     :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  picture     :string           not null
#

class Business < ActiveRecord::Base
  validates :name, :address, :description, :lat, :lng, :picture, presence: true
  validates :address, uniqueness: true

  has_many :reviews

  def average_rating
    reviews.average(:rating)
  end



end
