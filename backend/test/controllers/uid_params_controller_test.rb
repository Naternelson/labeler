require "test_helper"

class UidParamsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get uid_params_index_url
    assert_response :success
  end
end
