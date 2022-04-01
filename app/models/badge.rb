class Badge < ApplicationRecord
  belongs_to :gym
  has_many :user_badges, dependent: :destroy
  has_many :users, through: :user_badges
end
