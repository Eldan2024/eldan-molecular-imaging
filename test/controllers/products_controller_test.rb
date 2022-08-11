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

  test "should get ti201" do
    get products_ti201_url
    assert_response :success
  end
end
