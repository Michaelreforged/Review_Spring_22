class Api::PokemonsController < ApplicationController

  before_action :set_poke, only:[:show, :update, :destroy]
  before_action :page, only:[:pagePokemon]

  def index
    render json: Pokemon.all
  end
 

  def show
    render json: @pokemon
  end

  def create
    pokemon = Pokemon.new(poke_params)
    if(pokemon.validate)
      pokemon.save
      User.has_max_Poke.each do |user|
        Notification.create(reciever:user, action:"has appeared", notifiable:pokemon)
      end
      render json: pokemon
    else
      p pokemon.errors.messages.to_hash
      render json: {errors: pokemon.errors.full_messages}, status: 422
    end
  end

  def destroy
    render json: @pokemon.destroy
  end

  def update
    if(@pokemon.update(poke_params))
      render json: @pokemon
    else 
      render json: {errors: pokemon.errors.full_messages}, status: 422
    end
  end

  def pagePokemon
    pokemon = Pokemon.not_captured
    count = pokemon.count
    render json: {pokemon: Kaminari.paginate_array(pokemon).page(@page).per(@per), count:count, per:@per}
  end

  private
  def set_poke
    @pokemon = Pokemon.find(params[:id])
  end

  def page
    @page = params[:page] || 1
    @per = params[:per] || 30
  end

  def poke_params
    params.require(:pokemon).permit(:name,:location)
  end
end
