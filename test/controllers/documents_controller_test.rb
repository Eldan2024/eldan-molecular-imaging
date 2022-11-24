require "test_helper"

class DocumentsControllerTest < ActionDispatch::IntegrationTest
  test "should get accessability_declaration" do
    get documents_accessability_declaration_url
    assert_response :success
  end

  test "should get privacy_policy" do
    get documents_privacy_policy_url
    assert_response :success
  end
end
