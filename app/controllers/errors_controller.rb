class ErrorsController < ApplicationController
  def not_found
    @page_desc = "Error 404"
    @page_title = "Error 404"

    @message = "The page you are looking for was moved, removed or might have never existed."

    render status: 404
  end

  def internal_server_error
    @page_desc = "Error 500"
    @page_title = "Error 500"

    @message = "Oops, something went wrong.<br>Try to refresh this page or feel free to contact us if the problem persists".html_safe
    
    render status: 500
  end
end