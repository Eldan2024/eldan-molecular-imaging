require "test_helper"

class ProductsControllerTest < ActionDispatch::IntegrationTest
  test "should get ga67" do
    get products_ga67_url
    assert_response :success
  end

  test "should get mo99" do
    get products_mo99_url
    assert_response :success
  end

  test "should get tl201" do
    get products_tl201_url
    assert_response :success
  end
end
