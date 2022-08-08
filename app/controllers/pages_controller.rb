class PagesController < ApplicationController
  def index
  end

  def contact
    @via = params[:via]
  end

  def partners
  end

  def team
  end
end
