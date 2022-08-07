require "test_helper"

class AboutControllerTest < ActionDispatch::IntegrationTest
  test "should get eldan" do
    get about_eldan_url
    assert_response :success
  end

  test "should get molecular_imaging" do
    get about_molecular_imaging_url
    assert_response :success
  end

  test "should get neopharm" do
    get about_neopharm_url
    assert_response :success
  end
end
