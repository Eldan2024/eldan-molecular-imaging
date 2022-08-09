class ErrorsController < ApplicationController
  def not_found
    @page_desc = "Eldan Molecular Imaging"
    @page_title = "Error 404"
    render status: 404
  end

  def internal_server_error
    @page_desc = "Eldan Molecular Imaging"
    @page_title = "Error 500"
    render status: 500
  end
end
