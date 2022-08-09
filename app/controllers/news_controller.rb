class NewsController < ApplicationController
  def index
    @page_desc = "Eldan Molecular Imaging"
    @page_title =  "News"
  end

  def example
    @page_desc = "Eldan Molecular Imaging"
    @page_title =  "Example / News"
  end
end
