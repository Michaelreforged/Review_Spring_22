class Api::UsersController < ApplicationController
  before_action :authenticate_user!
  def trainers 
    render json: User.filtered(current_user.id)
  end

  def trainer_poke
    render json: User.trainer_pokemons
  end

  def my_pokemon
    render json: current_user.pokemons
  end
  
end
