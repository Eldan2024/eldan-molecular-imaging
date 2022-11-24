class SubscribersController < ApplicationController
  def index
    redirect_to '/news'
  end

  def create
    @subscriber = Subscriber.new(subscriber_params)

    if @subscriber.save
      cookies[:saved_lead] = true
      redirect_to '/news'
    else
      redirect_to '/news'
    end
  end

  private

    def subscriber_params
      params.require(:subscriber).permit(:email)
    end
end