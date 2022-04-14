class Api::PartyPokemonsController < ApplicationController
  before_action :authenticate_user!
  def add_pokemon
    if @party.save
      render json: @party
    else
      render json: {errors: @party.errors.full_messages}, status: 422
    end
  end
  
end
