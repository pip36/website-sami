class MessagesController < ApplicationController

def new
  @message = Message.new()
end

  def create
    @message = Message.create(message_params)
    if @message.save
      #send email to phil_23
      ContactMailer.contact_message(@message).deliver_now
      flash[:success] = "Message has been sent. Thank You!"
      redirect_to contact_url
    else
      #error
      render 'new'
    end
  end


private
def message_params
  params.require(:message).permit(:email, :subject, :content)
end

end
