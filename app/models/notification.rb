class Notification < ApplicationRecord
  belongs_to :reciever, class_name:"User"
  belongs_to :sender, class_name:"User", optional: true
  belongs_to :notifiable, polymorphic: true

  scope :unread, ->{where(read_at:nil)}
end
