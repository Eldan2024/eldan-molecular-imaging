class SubscribersController < ApplicationController
  def new
    @subscriber = Subscriber.new
    redirect_to '/news'
  end

  def create
    @subscriber = Subscriber.new(subscriber_params)

    dc = 'us12'
    api_key = "aec5127eb440a4db5442b1cd94619f30-us12"

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