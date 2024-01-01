class ContactsController < ApplicationController
  def new
    @title =  "Contact Us"
    @via = params[:via]
    @contact = Contact.new

    @name = "Ziv Gilboa"
    @email = "ZivG@eldan.biz"
    @title = "International Business Manager"
  end

  def create
    @contact = Contact.new(params[:contact].permit(:name))
    @contact.request = request

    if @contact.deliver
      if verify_recaptcha(model: @contact) && @contact.save
        flash.now[:success] = 'Message sent!'
        render :new
      else
        flash.now[:warning] = 'Please complete the captcha before sending your message'
        render :new
      end
    else
      flash.now[:danger] = 'Could not send message'
      render :new
    end
  end
end