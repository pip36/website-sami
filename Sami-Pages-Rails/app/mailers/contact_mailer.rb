class ContactMailer < ApplicationMailer

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.contact_mailer.contact_message.subject
  #

  def contact_message(message)
    @greeting = "Hi"
    @message = message
    mail to: "sambamy@hotmail.co.uk", from: @message.email, subject: @message.subject
  end
end
