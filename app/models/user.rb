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

  def self.has_max_Poke
    User.find_by_sql('
    Select distinct u.id, u.name, count(party.user_id) as num_of_poke
    From users as u
    left join party_pokemons as party on party.user_id = u.id
    group by u.id
    having count(party.user_id) < 6
    ')
  end
  
  def self.trainer_pokemons
    User.find_by_sql('
    SELECT u.id, u.name, party.pokemon_id, mon.species, mon.name as pokemon_name
    FROM users as u
    LEFT JOIN party_pokemons AS party ON u.id = party.user_id
    LEFT JOIN pokemons as mon on party.pokemon_id = mon.id
    ORDER BY u.id
    ')
  end

end
