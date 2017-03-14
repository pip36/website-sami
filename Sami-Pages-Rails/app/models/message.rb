class Message < ApplicationRecord

validates :email, presence: true
validates :subject, presence: true
validates :content, presence: true
end
