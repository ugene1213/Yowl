require 'test_helper'

class Api::UsersControllerTest < ActionController::TestCase
  test "should get api/sessions" do
    get :api/sessions
    assert_response :success
  end

end
