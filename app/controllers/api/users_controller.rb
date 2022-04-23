class Api::UsersController < ApplicationController
  before_action :authenticate_user!
  def trainers 
    render json: User.filtered(current_user.id)
  end

  def my_pokemon
    render json: current_user.pokemons
  end
  
  def trainerspokes
    render json: User.trainerpokemons
  end

end
