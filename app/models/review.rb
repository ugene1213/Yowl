# == Schema Information
#
# Table name: reviews
#
#  id          :integer          not null, primary key
#  rating      :integer          not null
#  body        :text             default(""), not null
#  business_id :integer          not null
#  user_id     :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Review < ActiveRecord::Base
  validates :user, :business, :rating, :body, presence: true
  validates :rating, inclusion: { in: (1..5) }

  belongs_to :business
  belongs_to :user

end
