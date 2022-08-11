class ErrorsController < ApplicationController
  def not_found
    @page_desc = "Error 404"
    @page_title = "Error 404"
    render status: 404
  end

  def internal_server_error
    @page_desc = "Error 500"
    @page_title = "Error 500"
    render status: 500
  end
end
