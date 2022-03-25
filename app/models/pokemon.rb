class Pokemon < ApplicationRecord
  validates :name, presence: {message:"Name is required"}
  validates :location, length: {minimum: 4, message:"Minimum char is 4"}
end
