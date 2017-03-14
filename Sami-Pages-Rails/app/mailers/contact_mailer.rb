class ContactMailer < ApplicationMailer

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.contact_mailer.contact_message.subject
  #

  def contact_message(message)
    @greeting = "Hi"
    @message = message
    mail to: "phil_23@live.co.uk", subject: @message.subject
  end
end
