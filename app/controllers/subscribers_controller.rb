class SubscribersController < ApplicationController
  def new
    @subscriber = Subscriber.new
  end

  def create
    @subscriber = Subscriber.new(subscriber_params)

    dc = 'us12'
    unique_id = "4c89d991c8"
    url = "https://#{dc}.api.mailchimp.com/3.0/lists/#{unique_id}/members"
    api_key = "aec5127eb440a4db5442b1cd94619f30-us12"

    user_details = {
      email: params[:email],
      status: "subscribed",
    };

    conn = Faraday.new(
      url: url,
      headers: {'Content-Type' => 'application/json', 'Authorization': "Bearer #{api_key}"}
    )

    conn.post() do |req|
      req.body = user_details.to_json
    end

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