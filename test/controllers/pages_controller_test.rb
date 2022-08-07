require "test_helper"

class PagesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get pages_index_url
    assert_response :success
  end

  test "should get contact" do
    get pages_contact_url
    assert_response :success
  end

  test "should get partners" do
    get pages_partners_url
    assert_response :success
  end

  test "should get team" do
    get pages_team_url
    assert_response :success
  end
end
