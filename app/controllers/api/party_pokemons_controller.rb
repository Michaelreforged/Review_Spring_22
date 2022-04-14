class Api::PartyPokemonsController < ApplicationController
  before_action :authenticate_user!
  def add_pokemon
    if(current_user.party_pokemons.exclude?(Pokemon.find(params[:id])) && current_user.party_pokemons.length < 6)
      puts"IN IF"
      @party = PartyPokemon.create(user_id:current_user.id,pokemon_id:Pokemon.find(params[:id]).id)
      if @party.save
        render json: @party
      else
        render json: {errors: @party.errors.full_messages}, status: 422
      end
    else
      render json: current_user.party_pokemons
    end
  end
  
end
