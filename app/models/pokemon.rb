class Pokemon < ApplicationRecord
  validates :name, presence: {message:" is Required"}
  validates :location, length: {minimum: 4 ,message:" length needs to be atleast 4 chars"}
  has_many :parties
end
