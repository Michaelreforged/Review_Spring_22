class Trainer < ApplicationRecord
  has_many :badges, dependent: :destroy
end
