# frozen_string_literal: true

class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  extend Devise::Models
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  include DeviseTokenAuth::Concerns::User
  has_many :notifications, foreign_key: :reciever_id
  has_many :user_badges, dependent: :destroy
  has_many :badges, through: :user_badges
  has_many :party_pokemons, dependent: :destroy
  has_many :pokemons, through: :party_pokemons
#   SELECT u.name, u.id
# FROM users as u
# where u.id != 1 

  def self.filtered(id)
    select("u.name, u.id")
    .from("users as u")
    .where("u.id != ?", id)
  end

  def self.still_need
    User.find_by_sql("
    SELECT distinct u.id, u.name, COUNT(pp.user_id) as num_of_pokemons
    FROM users as u
    LEFT JOIN party_pokemons AS pp on pp.user_id = u.id
    GROUP BY u.id
    HAVING COUNT(pp.user_id) < 6")
  end

end
