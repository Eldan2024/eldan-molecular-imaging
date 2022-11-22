class ApplicationController < ActionController::Base
  @desc = "Eldan Molecular Imaging"

  if defined?(@title) 
    @title = @title + " / Eldan MI"
  else 
    @title = "Eldan MI"
  end 
end
