require "test_helper"

class ProductGroupControllerTest < ActionDispatch::IntegrationTest
  test "should get get" do
    get product_group_get_url
    assert_response :success
  end
end
