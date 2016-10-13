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

require 'test_helper'

class BusinessTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
