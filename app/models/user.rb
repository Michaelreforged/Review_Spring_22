# frozen_string_literal: true

class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  extend Devise::Models
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  include DeviseTokenAuth::Concerns::User
  
  has_many :user_badges, dependent: :destroy
  has_many :badges, through: :user_badges
  has_one :party
  has_many :pokemons, through: :party

#   SELECT u.name, u.id
# FROM users as u
# where u.id != 1 

  def filtered(id)
    select("u.name, u.id")
    .from("users as u")
    .where("u.id != ?",id)
  end

end
