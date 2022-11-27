class DocumentsController < ApplicationController
  def accessability_declaration
    @title = "Accessability Declaration"
    @desc = "The Neopharm Group acts to provide accessible service to all its customers with the responsibility and inclusion as required by law."
  end

  def privacy_policy
    @title = "Privacy Policy"
    @desc = "Use of this website is subject to all of the terms and conditions of this legal notice and to all applicable laws."
  end
end
