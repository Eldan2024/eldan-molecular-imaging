class ContactsController < ApplicationController
  def new
    @page_desc = "Eldan Molecular Imaging"
    @page_title =  "Contact"
    @via = params[:via]
    
    @contact = Contact.new
  end

  def create
    @contact = Contact.new(params[:contact])
    @contact.request = request
    if @contact.deliver 
      flash.now[:success] = 'Message sent!'
      render :new
    else
      flash.now[:error] = 'Could not send message'
      render :new
    end
  end
end
